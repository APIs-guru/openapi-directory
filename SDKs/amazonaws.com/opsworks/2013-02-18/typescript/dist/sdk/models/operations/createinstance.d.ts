import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateInstanceXAmzTargetEnum {
    OpsWorks20130218CreateInstance = "OpsWorks_20130218.CreateInstance"
}
export declare class CreateInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInstanceXAmzTargetEnum;
}
export declare class CreateInstanceRequest extends SpeakeasyBase {
    headers: CreateInstanceHeaders;
    request: shared.CreateInstanceRequest;
}
export declare class CreateInstanceResponse extends SpeakeasyBase {
    contentType: string;
    createInstanceResult?: shared.CreateInstanceResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
