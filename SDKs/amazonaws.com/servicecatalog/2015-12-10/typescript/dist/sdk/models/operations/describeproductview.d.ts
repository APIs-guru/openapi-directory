import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeProductViewXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProductView = "AWS242ServiceCatalogService.DescribeProductView"
}
export declare class DescribeProductViewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProductViewXAmzTargetEnum;
}
export declare class DescribeProductViewRequest extends SpeakeasyBase {
    headers: DescribeProductViewHeaders;
    request: shared.DescribeProductViewInput;
}
export declare class DescribeProductViewResponse extends SpeakeasyBase {
    contentType: string;
    describeProductViewOutput?: shared.DescribeProductViewOutput;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
