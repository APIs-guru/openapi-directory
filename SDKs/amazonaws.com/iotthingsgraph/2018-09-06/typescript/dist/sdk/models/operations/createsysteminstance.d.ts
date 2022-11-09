import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateSystemInstanceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceCreateSystemInstance = "IotThingsGraphFrontEndService.CreateSystemInstance"
}
export declare class CreateSystemInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSystemInstanceXAmzTargetEnum;
}
export declare class CreateSystemInstanceRequest extends SpeakeasyBase {
    headers: CreateSystemInstanceHeaders;
    request: shared.CreateSystemInstanceRequest;
}
export declare class CreateSystemInstanceResponse extends SpeakeasyBase {
    contentType: string;
    createSystemInstanceResponse?: shared.CreateSystemInstanceResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
