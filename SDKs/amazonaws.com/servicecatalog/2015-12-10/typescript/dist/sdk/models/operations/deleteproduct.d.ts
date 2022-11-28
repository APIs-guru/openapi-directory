import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteProduct = "AWS242ServiceCatalogService.DeleteProduct"
}
export declare class DeleteProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProductXAmzTargetEnum;
}
export declare class DeleteProductRequest extends SpeakeasyBase {
    headers: DeleteProductHeaders;
    request: shared.DeleteProductInput;
}
export declare class DeleteProductResponse extends SpeakeasyBase {
    contentType: string;
    deleteProductOutput?: Map<string, any>;
    invalidParametersException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagOptionNotMigratedException?: any;
}
