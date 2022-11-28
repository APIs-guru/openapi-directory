import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupV2EditGroupPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2EditGroupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2EditGroupRequest extends SpeakeasyBase {
    pathParams: GroupV2EditGroupPathParams;
    security: GroupV2EditGroupSecurity;
}
export declare class GroupV2EditGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
