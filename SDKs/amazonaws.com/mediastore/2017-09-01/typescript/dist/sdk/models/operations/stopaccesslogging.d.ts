import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StopAccessLoggingXAmzTargetEnum {
    MediaStore20170901StopAccessLogging = "MediaStore_20170901.StopAccessLogging"
}
export declare class StopAccessLoggingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopAccessLoggingXAmzTargetEnum;
}
export declare class StopAccessLoggingRequest extends SpeakeasyBase {
    headers: StopAccessLoggingHeaders;
    request: shared.StopAccessLoggingInput;
}
export declare class StopAccessLoggingResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    internalServerError?: any;
    statusCode: number;
    stopAccessLoggingOutput?: Map<string, any>;
}
