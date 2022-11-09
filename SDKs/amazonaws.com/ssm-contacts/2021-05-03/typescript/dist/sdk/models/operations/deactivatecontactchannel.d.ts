import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeactivateContactChannelXAmzTargetEnum {
    SsmContactsDeactivateContactChannel = "SSMContacts.DeactivateContactChannel"
}
export declare class DeactivateContactChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeactivateContactChannelXAmzTargetEnum;
}
export declare class DeactivateContactChannelRequest extends SpeakeasyBase {
    headers: DeactivateContactChannelHeaders;
    request: shared.DeactivateContactChannelRequest;
}
export declare class DeactivateContactChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deactivateContactChannelResult?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
