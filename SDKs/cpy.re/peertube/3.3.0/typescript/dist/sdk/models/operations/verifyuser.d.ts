import { SpeakeasyBase } from "../../../internal/utils";
export declare class VerifyUserPathParams extends SpeakeasyBase {
    id: number;
}
export declare class VerifyUserRequestBody extends SpeakeasyBase {
    isPendingEmail?: boolean;
    verificationString: string;
}
export declare class VerifyUserRequest extends SpeakeasyBase {
    pathParams: VerifyUserPathParams;
    request?: VerifyUserRequestBody;
}
export declare class VerifyUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
