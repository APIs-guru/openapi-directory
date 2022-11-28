import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProvisionedProduct = "AWS242ServiceCatalogService.DescribeProvisionedProduct"
}
export declare class DescribeProvisionedProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProvisionedProductXAmzTargetEnum;
}
export declare class DescribeProvisionedProductRequest extends SpeakeasyBase {
    headers: DescribeProvisionedProductHeaders;
    request: shared.DescribeProvisionedProductInput;
}
export declare class DescribeProvisionedProductResponse extends SpeakeasyBase {
    contentType: string;
    describeProvisionedProductOutput?: shared.DescribeProvisionedProductOutput;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
