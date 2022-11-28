import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAccessXAmzTargetEnum {
    TransferServiceCreateAccess = "TransferService.CreateAccess"
}
export declare class CreateAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAccessXAmzTargetEnum;
}
export declare class CreateAccessRequest extends SpeakeasyBase {
    headers: CreateAccessHeaders;
    request: shared.CreateAccessRequest;
}
export declare class CreateAccessResponse extends SpeakeasyBase {
    contentType: string;
    createAccessResponse?: shared.CreateAccessResponse;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
