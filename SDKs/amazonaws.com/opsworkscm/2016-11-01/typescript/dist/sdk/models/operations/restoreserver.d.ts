import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RestoreServerXAmzTargetEnum {
    OpsWorksCmV20161101RestoreServer = "OpsWorksCM_V2016_11_01.RestoreServer"
}
export declare class RestoreServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreServerXAmzTargetEnum;
}
export declare class RestoreServerRequest extends SpeakeasyBase {
    headers: RestoreServerHeaders;
    request: shared.RestoreServerRequest;
}
export declare class RestoreServerResponse extends SpeakeasyBase {
    contentType: string;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    restoreServerResponse?: shared.RestoreServerResponse;
    statusCode: number;
    validationException?: any;
}
