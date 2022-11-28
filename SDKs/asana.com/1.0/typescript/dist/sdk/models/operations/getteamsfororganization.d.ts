import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsForOrganizationPathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare class GetTeamsForOrganizationQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTeamsForOrganization200ApplicationJson extends SpeakeasyBase {
    data?: shared.TeamCompact[];
}
export declare class GetTeamsForOrganizationRequest extends SpeakeasyBase {
    pathParams: GetTeamsForOrganizationPathParams;
    queryParams: GetTeamsForOrganizationQueryParams;
}
export declare class GetTeamsForOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTeamsForOrganization200ApplicationJsonObject?: GetTeamsForOrganization200ApplicationJson;
}
