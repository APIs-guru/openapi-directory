import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeDatasetExportJobXAmzTargetEnum {
    AmazonPersonalizeDescribeDatasetExportJob = "AmazonPersonalize.DescribeDatasetExportJob"
}
export declare class DescribeDatasetExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDatasetExportJobXAmzTargetEnum;
}
export declare class DescribeDatasetExportJobRequest extends SpeakeasyBase {
    headers: DescribeDatasetExportJobHeaders;
    request: shared.DescribeDatasetExportJobRequest;
}
export declare class DescribeDatasetExportJobResponse extends SpeakeasyBase {
    contentType: string;
    describeDatasetExportJobResponse?: shared.DescribeDatasetExportJobResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
