import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateProduct = "AWS242ServiceCatalogService.UpdateProduct"
}
export declare class UpdateProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProductXAmzTargetEnum;
}
export declare class UpdateProductRequest extends SpeakeasyBase {
    headers: UpdateProductHeaders;
    request: shared.UpdateProductInput;
}
export declare class UpdateProductResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagOptionNotMigratedException?: any;
    updateProductOutput?: shared.UpdateProductOutput;
}
