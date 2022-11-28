import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePortfolioShareXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdatePortfolioShare = "AWS242ServiceCatalogService.UpdatePortfolioShare"
}
export declare class UpdatePortfolioShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePortfolioShareXAmzTargetEnum;
}
export declare class UpdatePortfolioShareRequest extends SpeakeasyBase {
    headers: UpdatePortfolioShareHeaders;
    request: shared.UpdatePortfolioShareInput;
}
export declare class UpdatePortfolioShareResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    invalidStateException?: any;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updatePortfolioShareOutput?: shared.UpdatePortfolioShareOutput;
}
