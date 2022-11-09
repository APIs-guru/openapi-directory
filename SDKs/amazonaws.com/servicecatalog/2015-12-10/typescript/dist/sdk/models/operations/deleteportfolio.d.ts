import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeletePortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeletePortfolio = "AWS242ServiceCatalogService.DeletePortfolio"
}
export declare class DeletePortfolioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePortfolioXAmzTargetEnum;
}
export declare class DeletePortfolioRequest extends SpeakeasyBase {
    headers: DeletePortfolioHeaders;
    request: shared.DeletePortfolioInput;
}
export declare class DeletePortfolioResponse extends SpeakeasyBase {
    contentType: string;
    deletePortfolioOutput?: Map<string, any>;
    invalidParametersException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagOptionNotMigratedException?: any;
}
