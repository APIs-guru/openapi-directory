import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDocumentXAmzTargetEnum {
    AmazonSsmDescribeDocument = "AmazonSSM.DescribeDocument"
}
export declare class DescribeDocumentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDocumentXAmzTargetEnum;
}
export declare class DescribeDocumentRequest extends SpeakeasyBase {
    headers: DescribeDocumentHeaders;
    request: shared.DescribeDocumentRequest;
}
export declare class DescribeDocumentResponse extends SpeakeasyBase {
    contentType: string;
    describeDocumentResult?: shared.DescribeDocumentResult;
    internalServerError?: any;
    invalidDocument?: any;
    invalidDocumentVersion?: any;
    statusCode: number;
}
