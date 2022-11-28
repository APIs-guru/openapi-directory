import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteContactChannelXAmzTargetEnum {
    SsmContactsDeleteContactChannel = "SSMContacts.DeleteContactChannel"
}
export declare class DeleteContactChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteContactChannelXAmzTargetEnum;
}
export declare class DeleteContactChannelRequest extends SpeakeasyBase {
    headers: DeleteContactChannelHeaders;
    request: shared.DeleteContactChannelRequest;
}
export declare class DeleteContactChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteContactChannelResult?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
