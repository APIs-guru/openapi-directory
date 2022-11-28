import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContainerLogXAmzTargetEnum {
    Lightsail20161128GetContainerLog = "Lightsail_20161128.GetContainerLog"
}
export declare class GetContainerLogHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContainerLogXAmzTargetEnum;
}
export declare class GetContainerLogRequest extends SpeakeasyBase {
    headers: GetContainerLogHeaders;
    request: shared.GetContainerLogRequest;
}
export declare class GetContainerLogResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getContainerLogResult?: shared.GetContainerLogResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
