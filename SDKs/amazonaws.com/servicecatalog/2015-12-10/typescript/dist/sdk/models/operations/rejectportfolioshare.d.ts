import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RejectPortfolioShareXAmzTargetEnum {
    Aws242ServiceCatalogServiceRejectPortfolioShare = "AWS242ServiceCatalogService.RejectPortfolioShare"
}
export declare class RejectPortfolioShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RejectPortfolioShareXAmzTargetEnum;
}
export declare class RejectPortfolioShareRequest extends SpeakeasyBase {
    headers: RejectPortfolioShareHeaders;
    request: shared.RejectPortfolioShareInput;
}
export declare class RejectPortfolioShareResponse extends SpeakeasyBase {
    contentType: string;
    rejectPortfolioShareOutput?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
}
