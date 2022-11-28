import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserGetMembershipFromHardLinkedCredentialPathParams extends SpeakeasyBase {
    crType: number;
    credential: string;
}
export declare class UserGetMembershipFromHardLinkedCredentialRequest extends SpeakeasyBase {
    pathParams: UserGetMembershipFromHardLinkedCredentialPathParams;
}
export declare class UserGetMembershipFromHardLinkedCredentialResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
