import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartAccessLoggingXAmzTargetEnum {
    MediaStore20170901StartAccessLogging = "MediaStore_20170901.StartAccessLogging"
}
export declare class StartAccessLoggingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartAccessLoggingXAmzTargetEnum;
}
export declare class StartAccessLoggingRequest extends SpeakeasyBase {
    headers: StartAccessLoggingHeaders;
    request: shared.StartAccessLoggingInput;
}
export declare class StartAccessLoggingResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    internalServerError?: any;
    startAccessLoggingOutput?: Map<string, any>;
    statusCode: number;
}
