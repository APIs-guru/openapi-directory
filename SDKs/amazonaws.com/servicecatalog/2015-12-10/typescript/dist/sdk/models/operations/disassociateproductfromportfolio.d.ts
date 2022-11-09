import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociateProductFromPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisassociateProductFromPortfolio = "AWS242ServiceCatalogService.DisassociateProductFromPortfolio"
}
export declare class DisassociateProductFromPortfolioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateProductFromPortfolioXAmzTargetEnum;
}
export declare class DisassociateProductFromPortfolioRequest extends SpeakeasyBase {
    headers: DisassociateProductFromPortfolioHeaders;
    request: shared.DisassociateProductFromPortfolioInput;
}
export declare class DisassociateProductFromPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    disassociateProductFromPortfolioOutput?: Map<string, any>;
    invalidParametersException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
