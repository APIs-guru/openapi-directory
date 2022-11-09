import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupV2ApproveAllPendingPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2ApproveAllPendingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2ApproveAllPendingRequest extends SpeakeasyBase {
    pathParams: GroupV2ApproveAllPendingPathParams;
    security: GroupV2ApproveAllPendingSecurity;
}
export declare class GroupV2ApproveAllPendingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
