import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterElasticIpXAmzTargetEnum {
    OpsWorks20130218RegisterElasticIp = "OpsWorks_20130218.RegisterElasticIp"
}
export declare class RegisterElasticIpHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterElasticIpXAmzTargetEnum;
}
export declare class RegisterElasticIpRequest extends SpeakeasyBase {
    headers: RegisterElasticIpHeaders;
    request: shared.RegisterElasticIpRequest;
}
export declare class RegisterElasticIpResponse extends SpeakeasyBase {
    contentType: string;
    registerElasticIpResult?: shared.RegisterElasticIpResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
