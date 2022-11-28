import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListIdpGroupsForLegacyPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsListIdpGroupsForLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsListIdpGroupsForLegacyPathParams;
}
export declare class TeamsListIdpGroupsForLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    groupMapping?: shared.GroupMapping;
}
