import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAccessXAmzTargetEnum {
    TransferServiceDeleteAccess = "TransferService.DeleteAccess"
}
export declare class DeleteAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAccessXAmzTargetEnum;
}
export declare class DeleteAccessRequest extends SpeakeasyBase {
    headers: DeleteAccessHeaders;
    request: shared.DeleteAccessRequest;
}
export declare class DeleteAccessResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
