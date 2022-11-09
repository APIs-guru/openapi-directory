import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeRecordXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeRecord = "AWS242ServiceCatalogService.DescribeRecord"
}
export declare class DescribeRecordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRecordXAmzTargetEnum;
}
export declare class DescribeRecordRequest extends SpeakeasyBase {
    headers: DescribeRecordHeaders;
    request: shared.DescribeRecordInput;
}
export declare class DescribeRecordResponse extends SpeakeasyBase {
    contentType: string;
    describeRecordOutput?: shared.DescribeRecordOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
