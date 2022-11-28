import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAccessXAmzTargetEnum {
    TransferServiceUpdateAccess = "TransferService.UpdateAccess"
}
export declare class UpdateAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAccessXAmzTargetEnum;
}
export declare class UpdateAccessRequest extends SpeakeasyBase {
    headers: UpdateAccessHeaders;
    request: shared.UpdateAccessRequest;
}
export declare class UpdateAccessResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    updateAccessResponse?: shared.UpdateAccessResponse;
}
