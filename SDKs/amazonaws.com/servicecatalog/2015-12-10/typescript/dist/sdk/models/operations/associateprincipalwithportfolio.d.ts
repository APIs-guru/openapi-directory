import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AssociatePrincipalWithPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociatePrincipalWithPortfolio = "AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio"
}
export declare class AssociatePrincipalWithPortfolioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociatePrincipalWithPortfolioXAmzTargetEnum;
}
export declare class AssociatePrincipalWithPortfolioRequest extends SpeakeasyBase {
    headers: AssociatePrincipalWithPortfolioHeaders;
    request: shared.AssociatePrincipalWithPortfolioInput;
}
export declare class AssociatePrincipalWithPortfolioResponse extends SpeakeasyBase {
    associatePrincipalWithPortfolioOutput?: Map<string, any>;
    contentType: string;
    invalidParametersException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
