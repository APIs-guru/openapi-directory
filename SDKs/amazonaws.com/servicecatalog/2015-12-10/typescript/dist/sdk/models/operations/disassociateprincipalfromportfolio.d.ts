import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociatePrincipalFromPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisassociatePrincipalFromPortfolio = "AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio"
}
export declare class DisassociatePrincipalFromPortfolioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociatePrincipalFromPortfolioXAmzTargetEnum;
}
export declare class DisassociatePrincipalFromPortfolioRequest extends SpeakeasyBase {
    headers: DisassociatePrincipalFromPortfolioHeaders;
    request: shared.DisassociatePrincipalFromPortfolioInput;
}
export declare class DisassociatePrincipalFromPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    disassociatePrincipalFromPortfolioOutput?: Map<string, any>;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
