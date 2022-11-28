import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEmailIdentityDkimSigningAttributesPathParams extends SpeakeasyBase {
    emailIdentity: string;
}
export declare class PutEmailIdentityDkimSigningAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM).
**/
export declare class PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes extends SpeakeasyBase {
    domainSigningPrivateKey?: string;
    domainSigningSelector?: string;
}
export declare enum PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum {
    AwsSes = "AWS_SES",
    External = "EXTERNAL"
}
export declare class PutEmailIdentityDkimSigningAttributesRequestBody extends SpeakeasyBase {
    signingAttributes?: PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes;
    signingAttributesOrigin: PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum;
}
export declare class PutEmailIdentityDkimSigningAttributesRequest extends SpeakeasyBase {
    pathParams: PutEmailIdentityDkimSigningAttributesPathParams;
    headers: PutEmailIdentityDkimSigningAttributesHeaders;
    request: PutEmailIdentityDkimSigningAttributesRequestBody;
}
export declare class PutEmailIdentityDkimSigningAttributesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    putEmailIdentityDkimSigningAttributesResponse?: shared.PutEmailIdentityDkimSigningAttributesResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
