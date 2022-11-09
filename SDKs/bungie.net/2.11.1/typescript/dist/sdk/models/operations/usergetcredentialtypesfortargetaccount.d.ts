import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UserGetCredentialTypesForTargetAccountPathParams extends SpeakeasyBase {
    membershipId: number;
}
export declare class UserGetCredentialTypesForTargetAccountRequest extends SpeakeasyBase {
    pathParams: UserGetCredentialTypesForTargetAccountPathParams;
}
export declare class UserGetCredentialTypesForTargetAccountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
