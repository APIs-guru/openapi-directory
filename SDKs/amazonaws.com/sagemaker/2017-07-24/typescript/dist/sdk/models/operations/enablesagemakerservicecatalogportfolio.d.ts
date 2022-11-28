import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnableSagemakerServicecatalogPortfolioXAmzTargetEnum {
    SageMakerEnableSagemakerServicecatalogPortfolio = "SageMaker.EnableSagemakerServicecatalogPortfolio"
}
export declare class EnableSagemakerServicecatalogPortfolioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableSagemakerServicecatalogPortfolioXAmzTargetEnum;
}
export declare class EnableSagemakerServicecatalogPortfolioRequest extends SpeakeasyBase {
    headers: EnableSagemakerServicecatalogPortfolioHeaders;
    request: Map<string, any>;
}
export declare class EnableSagemakerServicecatalogPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    enableSagemakerServicecatalogPortfolioOutput?: Map<string, any>;
    statusCode: number;
}
