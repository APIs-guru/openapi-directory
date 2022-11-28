import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateProductWithPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociateProductWithPortfolio = "AWS242ServiceCatalogService.AssociateProductWithPortfolio"
}
export declare class AssociateProductWithPortfolioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateProductWithPortfolioXAmzTargetEnum;
}
export declare class AssociateProductWithPortfolioRequest extends SpeakeasyBase {
    headers: AssociateProductWithPortfolioHeaders;
    request: shared.AssociateProductWithPortfolioInput;
}
export declare class AssociateProductWithPortfolioResponse extends SpeakeasyBase {
    associateProductWithPortfolioOutput?: Map<string, any>;
    contentType: string;
    invalidParametersException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
