import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterElasticIpXAmzTargetEnum {
    OpsWorks20130218DeregisterElasticIp = "OpsWorks_20130218.DeregisterElasticIp"
}
export declare class DeregisterElasticIpHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterElasticIpXAmzTargetEnum;
}
export declare class DeregisterElasticIpRequest extends SpeakeasyBase {
    headers: DeregisterElasticIpHeaders;
    request: shared.DeregisterElasticIpRequest;
}
export declare class DeregisterElasticIpResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
