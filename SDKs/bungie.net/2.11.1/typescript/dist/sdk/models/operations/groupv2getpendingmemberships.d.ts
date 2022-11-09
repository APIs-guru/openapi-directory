import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupV2GetPendingMembershipsPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2GetPendingMembershipsQueryParams extends SpeakeasyBase {
    currentpage: number;
}
export declare class GroupV2GetPendingMembershipsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2GetPendingMembershipsRequest extends SpeakeasyBase {
    pathParams: GroupV2GetPendingMembershipsPathParams;
    queryParams: GroupV2GetPendingMembershipsQueryParams;
    security: GroupV2GetPendingMembershipsSecurity;
}
export declare class GroupV2GetPendingMembershipsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
