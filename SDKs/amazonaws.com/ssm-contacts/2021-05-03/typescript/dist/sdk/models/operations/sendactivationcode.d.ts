import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SendActivationCodeXAmzTargetEnum {
    SsmContactsSendActivationCode = "SSMContacts.SendActivationCode"
}
export declare class SendActivationCodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendActivationCodeXAmzTargetEnum;
}
export declare class SendActivationCodeRequest extends SpeakeasyBase {
    headers: SendActivationCodeHeaders;
    request: shared.SendActivationCodeRequest;
}
export declare class SendActivationCodeResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    dataEncryptionException?: any;
    internalServerException?: any;
    resourceNotFoundException?: any;
    sendActivationCodeResult?: Map<string, any>;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
