import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveMembersForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class RemoveMembersForProjectQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveMembersForProjectRequestBody extends SpeakeasyBase {
    data?: shared.RemoveMembersRequest;
}
export declare class RemoveMembersForProject200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class RemoveMembersForProjectRequest extends SpeakeasyBase {
    pathParams: RemoveMembersForProjectPathParams;
    queryParams: RemoveMembersForProjectQueryParams;
    request: RemoveMembersForProjectRequestBody;
}
export declare class RemoveMembersForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeMembersForProject200ApplicationJsonObject?: RemoveMembersForProject200ApplicationJson;
}
