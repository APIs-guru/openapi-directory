import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelCommandXAmzTargetEnum {
    AmazonSsmCancelCommand = "AmazonSSM.CancelCommand"
}
export declare class CancelCommandHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelCommandXAmzTargetEnum;
}
export declare class CancelCommandRequest extends SpeakeasyBase {
    headers: CancelCommandHeaders;
    request: shared.CancelCommandRequest;
}
export declare class CancelCommandResponse extends SpeakeasyBase {
    cancelCommandResult?: Map<string, any>;
    contentType: string;
    duplicateInstanceId?: any;
    internalServerError?: any;
    invalidCommandId?: any;
    invalidInstanceId?: any;
    statusCode: number;
}
