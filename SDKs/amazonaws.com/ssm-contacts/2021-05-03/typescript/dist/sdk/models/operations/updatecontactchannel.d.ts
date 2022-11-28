import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateContactChannelXAmzTargetEnum {
    SsmContactsUpdateContactChannel = "SSMContacts.UpdateContactChannel"
}
export declare class UpdateContactChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContactChannelXAmzTargetEnum;
}
export declare class UpdateContactChannelRequest extends SpeakeasyBase {
    headers: UpdateContactChannelHeaders;
    request: shared.UpdateContactChannelRequest;
}
export declare class UpdateContactChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    dataEncryptionException?: any;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateContactChannelResult?: Map<string, any>;
    validationException?: any;
}
