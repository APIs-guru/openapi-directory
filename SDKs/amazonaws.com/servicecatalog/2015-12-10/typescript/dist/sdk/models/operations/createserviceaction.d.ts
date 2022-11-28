import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateServiceAction = "AWS242ServiceCatalogService.CreateServiceAction"
}
export declare class CreateServiceActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateServiceActionXAmzTargetEnum;
}
export declare class CreateServiceActionRequest extends SpeakeasyBase {
    headers: CreateServiceActionHeaders;
    request: shared.CreateServiceActionInput;
}
export declare class CreateServiceActionResponse extends SpeakeasyBase {
    contentType: string;
    createServiceActionOutput?: shared.CreateServiceActionOutput;
    invalidParametersException?: any;
    limitExceededException?: any;
    statusCode: number;
}
