import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreatePortfolioShareXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreatePortfolioShare = "AWS242ServiceCatalogService.CreatePortfolioShare"
}
export declare class CreatePortfolioShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePortfolioShareXAmzTargetEnum;
}
export declare class CreatePortfolioShareRequest extends SpeakeasyBase {
    headers: CreatePortfolioShareHeaders;
    request: shared.CreatePortfolioShareInput;
}
export declare class CreatePortfolioShareResponse extends SpeakeasyBase {
    contentType: string;
    createPortfolioShareOutput?: shared.CreatePortfolioShareOutput;
    invalidParametersException?: any;
    invalidStateException?: any;
    limitExceededException?: any;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
