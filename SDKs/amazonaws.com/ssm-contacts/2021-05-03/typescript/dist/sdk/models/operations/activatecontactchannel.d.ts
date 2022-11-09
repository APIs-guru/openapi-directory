import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ActivateContactChannelXAmzTargetEnum {
    SsmContactsActivateContactChannel = "SSMContacts.ActivateContactChannel"
}
export declare class ActivateContactChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ActivateContactChannelXAmzTargetEnum;
}
export declare class ActivateContactChannelRequest extends SpeakeasyBase {
    headers: ActivateContactChannelHeaders;
    request: shared.ActivateContactChannelRequest;
}
export declare class ActivateContactChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    activateContactChannelResult?: Map<string, any>;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
