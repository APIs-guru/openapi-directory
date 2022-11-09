import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GroupV2GetGroupByNamePathParams extends SpeakeasyBase {
    groupName: string;
    groupType: number;
}
export declare class GroupV2GetGroupByNameRequest extends SpeakeasyBase {
    pathParams: GroupV2GetGroupByNamePathParams;
}
export declare class GroupV2GetGroupByNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
