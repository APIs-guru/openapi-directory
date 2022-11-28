import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListStackInstancesForProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceListStackInstancesForProvisionedProduct = "AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct"
}
export declare class ListStackInstancesForProvisionedProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStackInstancesForProvisionedProductXAmzTargetEnum;
}
export declare class ListStackInstancesForProvisionedProductRequest extends SpeakeasyBase {
    headers: ListStackInstancesForProvisionedProductHeaders;
    request: shared.ListStackInstancesForProvisionedProductInput;
}
export declare class ListStackInstancesForProvisionedProductResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listStackInstancesForProvisionedProductOutput?: shared.ListStackInstancesForProvisionedProductOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
