import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAddressXAmzTargetEnum {
    AwsieSnowballJobManagementServiceCreateAddress = "AWSIESnowballJobManagementService.CreateAddress"
}
export declare class CreateAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAddressXAmzTargetEnum;
}
export declare class CreateAddressRequest extends SpeakeasyBase {
    headers: CreateAddressHeaders;
    request: shared.CreateAddressRequest;
}
export declare class CreateAddressResponse extends SpeakeasyBase {
    contentType: string;
    createAddressResult?: shared.CreateAddressResult;
    invalidAddressException?: any;
    statusCode: number;
    unsupportedAddressException?: any;
}
