import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateContactChannelXAmzTargetEnum {
    SsmContactsCreateContactChannel = "SSMContacts.CreateContactChannel"
}
export declare class CreateContactChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContactChannelXAmzTargetEnum;
}
export declare class CreateContactChannelRequest extends SpeakeasyBase {
    headers: CreateContactChannelHeaders;
    request: shared.CreateContactChannelRequest;
}
export declare class CreateContactChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createContactChannelResult?: shared.CreateContactChannelResult;
    dataEncryptionException?: any;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
