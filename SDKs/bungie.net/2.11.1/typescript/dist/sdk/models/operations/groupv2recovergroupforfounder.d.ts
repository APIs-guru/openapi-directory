import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupV2RecoverGroupForFounderPathParams extends SpeakeasyBase {
    groupType: number;
    membershipId: number;
    membershipType: number;
}
export declare class GroupV2RecoverGroupForFounderRequest extends SpeakeasyBase {
    pathParams: GroupV2RecoverGroupForFounderPathParams;
}
export declare class GroupV2RecoverGroupForFounderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
