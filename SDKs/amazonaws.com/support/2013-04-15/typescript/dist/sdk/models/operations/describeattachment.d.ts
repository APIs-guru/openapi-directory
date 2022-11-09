import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeAttachmentXAmzTargetEnum {
    AwsSupport20130415DescribeAttachment = "AWSSupport_20130415.DescribeAttachment"
}
export declare class DescribeAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAttachmentXAmzTargetEnum;
}
export declare class DescribeAttachmentRequest extends SpeakeasyBase {
    headers: DescribeAttachmentHeaders;
    request: shared.DescribeAttachmentRequest;
}
export declare class DescribeAttachmentResponse extends SpeakeasyBase {
    attachmentIdNotFound?: any;
    contentType: string;
    describeAttachmentLimitExceeded?: any;
    describeAttachmentResponse?: shared.DescribeAttachmentResponse;
    internalServerError?: any;
    statusCode: number;
}
