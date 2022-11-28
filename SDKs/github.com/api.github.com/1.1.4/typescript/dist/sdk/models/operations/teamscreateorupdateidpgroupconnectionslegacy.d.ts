import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups extends SpeakeasyBase {
    description?: string;
    groupDescription: string;
    groupId: string;
    groupName: string;
    id?: string;
    name?: string;
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody extends SpeakeasyBase {
    groups: TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups[];
    syncedAt?: string;
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams;
    request?: TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody;
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    groupMapping?: shared.GroupMapping;
    validationError?: shared.ValidationError;
}
