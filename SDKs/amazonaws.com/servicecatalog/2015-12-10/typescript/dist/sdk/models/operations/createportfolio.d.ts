import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreatePortfolio = "AWS242ServiceCatalogService.CreatePortfolio"
}
export declare class CreatePortfolioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePortfolioXAmzTargetEnum;
}
export declare class CreatePortfolioRequest extends SpeakeasyBase {
    headers: CreatePortfolioHeaders;
    request: shared.CreatePortfolioInput;
}
export declare class CreatePortfolioResponse extends SpeakeasyBase {
    contentType: string;
    createPortfolioOutput?: shared.CreatePortfolioOutput;
    invalidParametersException?: any;
    limitExceededException?: any;
    statusCode: number;
    tagOptionNotMigratedException?: any;
}
