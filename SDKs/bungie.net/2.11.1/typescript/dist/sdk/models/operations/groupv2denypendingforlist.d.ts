import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupV2DenyPendingForListPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2DenyPendingForListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2DenyPendingForListRequest extends SpeakeasyBase {
    pathParams: GroupV2DenyPendingForListPathParams;
    security: GroupV2DenyPendingForListSecurity;
}
export declare class GroupV2DenyPendingForListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
