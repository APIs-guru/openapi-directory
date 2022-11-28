import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListChildInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
}
export declare class TeamsListChildInOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class TeamsListChildInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsListChildInOrgPathParams;
    queryParams: TeamsListChildInOrgQueryParams;
}
export declare class TeamsListChildInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teams?: shared.Team[];
}
