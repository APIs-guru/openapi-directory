import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnum {
    SageMakerGetSagemakerServicecatalogPortfolioStatus = "SageMaker.GetSagemakerServicecatalogPortfolioStatus"
}
export declare class GetSagemakerServicecatalogPortfolioStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnum;
}
export declare class GetSagemakerServicecatalogPortfolioStatusRequest extends SpeakeasyBase {
    headers: GetSagemakerServicecatalogPortfolioStatusHeaders;
    request: Map<string, any>;
}
export declare class GetSagemakerServicecatalogPortfolioStatusResponse extends SpeakeasyBase {
    contentType: string;
    getSagemakerServicecatalogPortfolioStatusOutput?: shared.GetSagemakerServicecatalogPortfolioStatusOutput;
    statusCode: number;
}
