import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterManagedInstanceXAmzTargetEnum {
    AmazonSsmDeregisterManagedInstance = "AmazonSSM.DeregisterManagedInstance"
}
export declare class DeregisterManagedInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterManagedInstanceXAmzTargetEnum;
}
export declare class DeregisterManagedInstanceRequest extends SpeakeasyBase {
    headers: DeregisterManagedInstanceHeaders;
    request: shared.DeregisterManagedInstanceRequest;
}
export declare class DeregisterManagedInstanceResponse extends SpeakeasyBase {
    contentType: string;
    deregisterManagedInstanceResult?: Map<string, any>;
    internalServerError?: any;
    invalidInstanceId?: any;
    statusCode: number;
}
