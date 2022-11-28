import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateElasticIpXAmzTargetEnum {
    OpsWorks20130218DisassociateElasticIp = "OpsWorks_20130218.DisassociateElasticIp"
}
export declare class DisassociateElasticIpHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateElasticIpXAmzTargetEnum;
}
export declare class DisassociateElasticIpRequest extends SpeakeasyBase {
    headers: DisassociateElasticIpHeaders;
    request: shared.DisassociateElasticIpRequest;
}
export declare class DisassociateElasticIpResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
