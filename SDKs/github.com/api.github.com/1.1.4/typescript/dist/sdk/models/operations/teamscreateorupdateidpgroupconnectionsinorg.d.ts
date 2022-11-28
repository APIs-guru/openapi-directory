import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups extends SpeakeasyBase {
    groupDescription: string;
    groupId: string;
    groupName: string;
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody extends SpeakeasyBase {
    groups: TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups[];
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams;
    request?: TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody;
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    groupMapping?: shared.GroupMapping;
}
