import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DownloadDefaultKeyPairXAmzTargetEnum {
    Lightsail20161128DownloadDefaultKeyPair = "Lightsail_20161128.DownloadDefaultKeyPair"
}
export declare class DownloadDefaultKeyPairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DownloadDefaultKeyPairXAmzTargetEnum;
}
export declare class DownloadDefaultKeyPairRequest extends SpeakeasyBase {
    headers: DownloadDefaultKeyPairHeaders;
    request: Map<string, any>;
}
export declare class DownloadDefaultKeyPairResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    downloadDefaultKeyPairResult?: shared.DownloadDefaultKeyPairResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
