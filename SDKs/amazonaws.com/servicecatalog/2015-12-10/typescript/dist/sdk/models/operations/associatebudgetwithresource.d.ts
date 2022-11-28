import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateBudgetWithResourceXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociateBudgetWithResource = "AWS242ServiceCatalogService.AssociateBudgetWithResource"
}
export declare class AssociateBudgetWithResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateBudgetWithResourceXAmzTargetEnum;
}
export declare class AssociateBudgetWithResourceRequest extends SpeakeasyBase {
    headers: AssociateBudgetWithResourceHeaders;
    request: shared.AssociateBudgetWithResourceInput;
}
export declare class AssociateBudgetWithResourceResponse extends SpeakeasyBase {
    associateBudgetWithResourceOutput?: Map<string, any>;
    contentType: string;
    duplicateResourceException?: any;
    invalidParametersException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
