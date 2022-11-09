import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProduct = "AWS242ServiceCatalogService.DescribeProduct"
}
export declare class DescribeProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProductXAmzTargetEnum;
}
export declare class DescribeProductRequest extends SpeakeasyBase {
    headers: DescribeProductHeaders;
    request: shared.DescribeProductInput;
}
export declare class DescribeProductResponse extends SpeakeasyBase {
    contentType: string;
    describeProductOutput?: shared.DescribeProductOutput;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
