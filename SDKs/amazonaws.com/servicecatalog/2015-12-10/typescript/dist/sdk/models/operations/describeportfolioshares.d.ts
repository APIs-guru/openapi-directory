import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribePortfolioSharesQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum DescribePortfolioSharesXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribePortfolioShares = "AWS242ServiceCatalogService.DescribePortfolioShares"
}
export declare class DescribePortfolioSharesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePortfolioSharesXAmzTargetEnum;
}
export declare class DescribePortfolioSharesRequest extends SpeakeasyBase {
    queryParams: DescribePortfolioSharesQueryParams;
    headers: DescribePortfolioSharesHeaders;
    request: shared.DescribePortfolioSharesInput;
}
export declare class DescribePortfolioSharesResponse extends SpeakeasyBase {
    contentType: string;
    describePortfolioSharesOutput?: shared.DescribePortfolioSharesOutput;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
