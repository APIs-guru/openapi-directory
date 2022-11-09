import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupV2ApprovePendingForListPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2ApprovePendingForListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2ApprovePendingForListRequest extends SpeakeasyBase {
    pathParams: GroupV2ApprovePendingForListPathParams;
    security: GroupV2ApprovePendingForListSecurity;
}
export declare class GroupV2ApprovePendingForListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
