import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateReturnShippingLabelXAmzTargetEnum {
    AwsieSnowballJobManagementServiceCreateReturnShippingLabel = "AWSIESnowballJobManagementService.CreateReturnShippingLabel"
}
export declare class CreateReturnShippingLabelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateReturnShippingLabelXAmzTargetEnum;
}
export declare class CreateReturnShippingLabelRequest extends SpeakeasyBase {
    headers: CreateReturnShippingLabelHeaders;
    request: shared.CreateReturnShippingLabelRequest;
}
export declare class CreateReturnShippingLabelResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createReturnShippingLabelResult?: shared.CreateReturnShippingLabelResult;
    invalidInputCombinationException?: any;
    invalidJobStateException?: any;
    invalidResourceException?: any;
    returnShippingLabelAlreadyExistsException?: any;
    statusCode: number;
}
