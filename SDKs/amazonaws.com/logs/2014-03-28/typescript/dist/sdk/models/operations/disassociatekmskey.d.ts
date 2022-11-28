import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateKmsKeyXAmzTargetEnum {
    Logs20140328DisassociateKmsKey = "Logs_20140328.DisassociateKmsKey"
}
export declare class DisassociateKmsKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateKmsKeyXAmzTargetEnum;
}
export declare class DisassociateKmsKeyRequest extends SpeakeasyBase {
    headers: DisassociateKmsKeyHeaders;
    request: shared.DisassociateKmsKeyRequest;
}
export declare class DisassociateKmsKeyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    operationAbortedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
