import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdatePortfolio = "AWS242ServiceCatalogService.UpdatePortfolio"
}
export declare class UpdatePortfolioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePortfolioXAmzTargetEnum;
}
export declare class UpdatePortfolioRequest extends SpeakeasyBase {
    headers: UpdatePortfolioHeaders;
    request: shared.UpdatePortfolioInput;
}
export declare class UpdatePortfolioResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagOptionNotMigratedException?: any;
    updatePortfolioOutput?: shared.UpdatePortfolioOutput;
}
