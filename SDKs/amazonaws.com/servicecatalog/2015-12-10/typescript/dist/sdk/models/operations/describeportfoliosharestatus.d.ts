import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribePortfolioShareStatusXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribePortfolioShareStatus = "AWS242ServiceCatalogService.DescribePortfolioShareStatus"
}
export declare class DescribePortfolioShareStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePortfolioShareStatusXAmzTargetEnum;
}
export declare class DescribePortfolioShareStatusRequest extends SpeakeasyBase {
    headers: DescribePortfolioShareStatusHeaders;
    request: shared.DescribePortfolioShareStatusInput;
}
export declare class DescribePortfolioShareStatusResponse extends SpeakeasyBase {
    contentType: string;
    describePortfolioShareStatusOutput?: shared.DescribePortfolioShareStatusOutput;
    invalidParametersException?: any;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
