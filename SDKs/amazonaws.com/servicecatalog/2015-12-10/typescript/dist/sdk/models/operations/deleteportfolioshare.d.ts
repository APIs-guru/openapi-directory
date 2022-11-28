import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePortfolioShareXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeletePortfolioShare = "AWS242ServiceCatalogService.DeletePortfolioShare"
}
export declare class DeletePortfolioShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePortfolioShareXAmzTargetEnum;
}
export declare class DeletePortfolioShareRequest extends SpeakeasyBase {
    headers: DeletePortfolioShareHeaders;
    request: shared.DeletePortfolioShareInput;
}
export declare class DeletePortfolioShareResponse extends SpeakeasyBase {
    contentType: string;
    deletePortfolioShareOutput?: shared.DeletePortfolioShareOutput;
    invalidParametersException?: any;
    invalidStateException?: any;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
