import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupV2GetGroupPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2GetGroupRequest extends SpeakeasyBase {
    pathParams: GroupV2GetGroupPathParams;
}
export declare class GroupV2GetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
