import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AssociateKmsKeyXAmzTargetEnum {
    Logs20140328AssociateKmsKey = "Logs_20140328.AssociateKmsKey"
}
export declare class AssociateKmsKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateKmsKeyXAmzTargetEnum;
}
export declare class AssociateKmsKeyRequest extends SpeakeasyBase {
    headers: AssociateKmsKeyHeaders;
    request: shared.AssociateKmsKeyRequest;
}
export declare class AssociateKmsKeyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    operationAbortedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
