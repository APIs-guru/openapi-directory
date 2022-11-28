import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateBudgetFromResourceXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisassociateBudgetFromResource = "AWS242ServiceCatalogService.DisassociateBudgetFromResource"
}
export declare class DisassociateBudgetFromResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateBudgetFromResourceXAmzTargetEnum;
}
export declare class DisassociateBudgetFromResourceRequest extends SpeakeasyBase {
    headers: DisassociateBudgetFromResourceHeaders;
    request: shared.DisassociateBudgetFromResourceInput;
}
export declare class DisassociateBudgetFromResourceResponse extends SpeakeasyBase {
    contentType: string;
    disassociateBudgetFromResourceOutput?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
}
