import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AcceptPortfolioShareXAmzTargetEnum {
    Aws242ServiceCatalogServiceAcceptPortfolioShare = "AWS242ServiceCatalogService.AcceptPortfolioShare"
}
export declare class AcceptPortfolioShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptPortfolioShareXAmzTargetEnum;
}
export declare class AcceptPortfolioShareRequest extends SpeakeasyBase {
    headers: AcceptPortfolioShareHeaders;
    request: shared.AcceptPortfolioShareInput;
}
export declare class AcceptPortfolioShareResponse extends SpeakeasyBase {
    acceptPortfolioShareOutput?: Map<string, any>;
    contentType: string;
    invalidParametersException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
