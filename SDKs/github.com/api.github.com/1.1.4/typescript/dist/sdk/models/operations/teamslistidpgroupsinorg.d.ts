import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListIdpGroupsInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
}
export declare class TeamsListIdpGroupsInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsListIdpGroupsInOrgPathParams;
}
export declare class TeamsListIdpGroupsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    groupMapping?: shared.GroupMapping;
}
