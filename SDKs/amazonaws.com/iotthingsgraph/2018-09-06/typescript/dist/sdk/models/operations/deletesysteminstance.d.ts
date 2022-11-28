import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSystemInstanceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeleteSystemInstance = "IotThingsGraphFrontEndService.DeleteSystemInstance"
}
export declare class DeleteSystemInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSystemInstanceXAmzTargetEnum;
}
export declare class DeleteSystemInstanceRequest extends SpeakeasyBase {
    headers: DeleteSystemInstanceHeaders;
    request: shared.DeleteSystemInstanceRequest;
}
export declare class DeleteSystemInstanceResponse extends SpeakeasyBase {
    contentType: string;
    deleteSystemInstanceResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    statusCode: number;
    throttlingException?: any;
}
