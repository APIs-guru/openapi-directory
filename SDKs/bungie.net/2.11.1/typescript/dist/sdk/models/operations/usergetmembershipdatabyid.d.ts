import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UserGetMembershipDataByIdPathParams extends SpeakeasyBase {
    membershipId: number;
    membershipType: number;
}
export declare class UserGetMembershipDataByIdRequest extends SpeakeasyBase {
    pathParams: UserGetMembershipDataByIdPathParams;
}
export declare class UserGetMembershipDataByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
