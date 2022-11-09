import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupV2DenyAllPendingPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2DenyAllPendingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2DenyAllPendingRequest extends SpeakeasyBase {
    pathParams: GroupV2DenyAllPendingPathParams;
    security: GroupV2DenyAllPendingSecurity;
}
export declare class GroupV2DenyAllPendingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
