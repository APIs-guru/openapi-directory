import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateEmailIdentityHeaders extends SpeakeasyBase {
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
export declare class CreateEmailIdentityRequestBodyDkimSigningAttributes extends SpeakeasyBase {
    domainSigningPrivateKey?: string;
    domainSigningSelector?: string;
}
export declare class CreateEmailIdentityRequestBody extends SpeakeasyBase {
    configurationSetName?: string;
    dkimSigningAttributes?: CreateEmailIdentityRequestBodyDkimSigningAttributes;
    emailIdentity: string;
    tags?: shared.Tag[];
}
export declare class CreateEmailIdentityRequest extends SpeakeasyBase {
    headers: CreateEmailIdentityHeaders;
    request: CreateEmailIdentityRequestBody;
}
export declare class CreateEmailIdentityResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createEmailIdentityResponse?: shared.CreateEmailIdentityResponse;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
