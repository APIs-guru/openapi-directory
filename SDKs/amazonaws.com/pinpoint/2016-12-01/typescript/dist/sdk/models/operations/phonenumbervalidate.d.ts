import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PhoneNumberValidateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies a phone number to validate and retrieve information about.
**/
export declare class PhoneNumberValidateRequestBodyNumberValidateRequest extends SpeakeasyBase {
    isoCountryCode?: string;
    phoneNumber?: string;
}
export declare class PhoneNumberValidateRequestBody extends SpeakeasyBase {
    numberValidateRequest: PhoneNumberValidateRequestBodyNumberValidateRequest;
}
export declare class PhoneNumberValidateRequest extends SpeakeasyBase {
    headers: PhoneNumberValidateHeaders;
    request: PhoneNumberValidateRequestBody;
}
export declare class PhoneNumberValidateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    phoneNumberValidateResponse?: shared.PhoneNumberValidateResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
