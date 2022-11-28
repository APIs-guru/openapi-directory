import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListProvisionedProductPlansXAmzTargetEnum {
    Aws242ServiceCatalogServiceListProvisionedProductPlans = "AWS242ServiceCatalogService.ListProvisionedProductPlans"
}
export declare class ListProvisionedProductPlansHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProvisionedProductPlansXAmzTargetEnum;
}
export declare class ListProvisionedProductPlansRequest extends SpeakeasyBase {
    headers: ListProvisionedProductPlansHeaders;
    request: shared.ListProvisionedProductPlansInput;
}
export declare class ListProvisionedProductPlansResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listProvisionedProductPlansOutput?: shared.ListProvisionedProductPlansOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
