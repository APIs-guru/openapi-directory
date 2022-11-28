import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendCustomVerificationEmailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SendCustomVerificationEmailRequestBody extends SpeakeasyBase {
    configurationSetName?: string;
    emailAddress: string;
    templateName: string;
}
export declare class SendCustomVerificationEmailRequest extends SpeakeasyBase {
    headers: SendCustomVerificationEmailHeaders;
    request: SendCustomVerificationEmailRequestBody;
}
export declare class SendCustomVerificationEmailResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    limitExceededException?: any;
    mailFromDomainNotVerifiedException?: any;
    messageRejected?: any;
    notFoundException?: any;
    sendCustomVerificationEmailResponse?: shared.SendCustomVerificationEmailResponse;
    sendingPausedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
