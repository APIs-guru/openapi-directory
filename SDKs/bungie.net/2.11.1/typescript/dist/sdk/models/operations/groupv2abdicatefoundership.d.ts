import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupV2AbdicateFoundershipPathParams extends SpeakeasyBase {
    founderIdNew: number;
    groupId: number;
    membershipType: number;
}
export declare class GroupV2AbdicateFoundershipRequest extends SpeakeasyBase {
    pathParams: GroupV2AbdicateFoundershipPathParams;
}
export declare class GroupV2AbdicateFoundershipResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
