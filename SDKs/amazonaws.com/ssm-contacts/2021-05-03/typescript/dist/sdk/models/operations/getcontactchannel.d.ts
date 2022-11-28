import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContactChannelXAmzTargetEnum {
    SsmContactsGetContactChannel = "SSMContacts.GetContactChannel"
}
export declare class GetContactChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContactChannelXAmzTargetEnum;
}
export declare class GetContactChannelRequest extends SpeakeasyBase {
    headers: GetContactChannelHeaders;
    request: shared.GetContactChannelRequest;
}
export declare class GetContactChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    dataEncryptionException?: any;
    getContactChannelResult?: shared.GetContactChannelResult;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
