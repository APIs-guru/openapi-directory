import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTagOptionXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeTagOption = "AWS242ServiceCatalogService.DescribeTagOption"
}
export declare class DescribeTagOptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTagOptionXAmzTargetEnum;
}
export declare class DescribeTagOptionRequest extends SpeakeasyBase {
    headers: DescribeTagOptionHeaders;
    request: shared.DescribeTagOptionInput;
}
export declare class DescribeTagOptionResponse extends SpeakeasyBase {
    contentType: string;
    describeTagOptionOutput?: shared.DescribeTagOptionOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    tagOptionNotMigratedException?: any;
}
