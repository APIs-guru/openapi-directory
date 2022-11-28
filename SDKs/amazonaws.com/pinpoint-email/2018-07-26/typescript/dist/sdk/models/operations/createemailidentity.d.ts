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
export declare class CreateEmailIdentityRequestBody extends SpeakeasyBase {
    emailIdentity: string;
    tags?: shared.Tag[];
}
export declare class CreateEmailIdentityRequest extends SpeakeasyBase {
    headers: CreateEmailIdentityHeaders;
    request: CreateEmailIdentityRequestBody;
}
export declare class CreateEmailIdentityResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createEmailIdentityResponse?: shared.CreateEmailIdentityResponse;
    limitExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
