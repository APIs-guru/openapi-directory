import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribePortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribePortfolio = "AWS242ServiceCatalogService.DescribePortfolio"
}
export declare class DescribePortfolioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePortfolioXAmzTargetEnum;
}
export declare class DescribePortfolioRequest extends SpeakeasyBase {
    headers: DescribePortfolioHeaders;
    request: shared.DescribePortfolioInput;
}
export declare class DescribePortfolioResponse extends SpeakeasyBase {
    contentType: string;
    describePortfolioOutput?: shared.DescribePortfolioOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
