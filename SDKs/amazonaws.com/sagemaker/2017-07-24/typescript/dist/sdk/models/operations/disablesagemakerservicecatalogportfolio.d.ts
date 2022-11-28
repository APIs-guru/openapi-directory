import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DisableSagemakerServicecatalogPortfolioXAmzTargetEnum {
    SageMakerDisableSagemakerServicecatalogPortfolio = "SageMaker.DisableSagemakerServicecatalogPortfolio"
}
export declare class DisableSagemakerServicecatalogPortfolioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableSagemakerServicecatalogPortfolioXAmzTargetEnum;
}
export declare class DisableSagemakerServicecatalogPortfolioRequest extends SpeakeasyBase {
    headers: DisableSagemakerServicecatalogPortfolioHeaders;
    request: Map<string, any>;
}
export declare class DisableSagemakerServicecatalogPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    disableSagemakerServicecatalogPortfolioOutput?: Map<string, any>;
    statusCode: number;
}
