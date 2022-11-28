import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddAttachmentsToSetXAmzTargetEnum {
    AwsSupport20130415AddAttachmentsToSet = "AWSSupport_20130415.AddAttachmentsToSet"
}
export declare class AddAttachmentsToSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddAttachmentsToSetXAmzTargetEnum;
}
export declare class AddAttachmentsToSetRequest extends SpeakeasyBase {
    headers: AddAttachmentsToSetHeaders;
    request: shared.AddAttachmentsToSetRequest;
}
export declare class AddAttachmentsToSetResponse extends SpeakeasyBase {
    addAttachmentsToSetResponse?: shared.AddAttachmentsToSetResponse;
    attachmentLimitExceeded?: any;
    attachmentSetExpired?: any;
    attachmentSetIdNotFound?: any;
    attachmentSetSizeLimitExceeded?: any;
    contentType: string;
    internalServerError?: any;
    statusCode: number;
}
