import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupV2GetAdminsAndFounderOfGroupPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2GetAdminsAndFounderOfGroupQueryParams extends SpeakeasyBase {
    currentpage: number;
}
export declare class GroupV2GetAdminsAndFounderOfGroupRequest extends SpeakeasyBase {
    pathParams: GroupV2GetAdminsAndFounderOfGroupPathParams;
    queryParams: GroupV2GetAdminsAndFounderOfGroupQueryParams;
}
export declare class GroupV2GetAdminsAndFounderOfGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
