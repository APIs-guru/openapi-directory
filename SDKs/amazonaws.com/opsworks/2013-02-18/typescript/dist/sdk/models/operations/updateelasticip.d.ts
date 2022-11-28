import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateElasticIpXAmzTargetEnum {
    OpsWorks20130218UpdateElasticIp = "OpsWorks_20130218.UpdateElasticIp"
}
export declare class UpdateElasticIpHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateElasticIpXAmzTargetEnum;
}
export declare class UpdateElasticIpRequest extends SpeakeasyBase {
    headers: UpdateElasticIpHeaders;
    request: shared.UpdateElasticIpRequest;
}
export declare class UpdateElasticIpResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
