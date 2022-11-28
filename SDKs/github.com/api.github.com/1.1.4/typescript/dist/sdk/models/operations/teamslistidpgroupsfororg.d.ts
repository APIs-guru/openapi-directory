import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListIdpGroupsForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class TeamsListIdpGroupsForOrgQueryParams extends SpeakeasyBase {
    page?: string;
    perPage?: number;
}
export declare class TeamsListIdpGroupsForOrgRequest extends SpeakeasyBase {
    pathParams: TeamsListIdpGroupsForOrgPathParams;
    queryParams: TeamsListIdpGroupsForOrgQueryParams;
}
export declare class TeamsListIdpGroupsForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    groupMapping?: shared.GroupMapping;
}
