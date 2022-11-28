import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetConnectionStatusXAmzTargetEnum {
    AmazonSsmGetConnectionStatus = "AmazonSSM.GetConnectionStatus"
}
export declare class GetConnectionStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetConnectionStatusXAmzTargetEnum;
}
export declare class GetConnectionStatusRequest extends SpeakeasyBase {
    headers: GetConnectionStatusHeaders;
    request: shared.GetConnectionStatusRequest;
}
export declare class GetConnectionStatusResponse extends SpeakeasyBase {
    contentType: string;
    getConnectionStatusResponse?: shared.GetConnectionStatusResponse;
    internalServerError?: any;
    statusCode: number;
}
