import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateServerXAmzTargetEnum {
    OpsWorksCmV20161101UpdateServer = "OpsWorksCM_V2016_11_01.UpdateServer"
}
export declare class UpdateServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServerXAmzTargetEnum;
}
export declare class UpdateServerRequest extends SpeakeasyBase {
    headers: UpdateServerHeaders;
    request: shared.UpdateServerRequest;
}
export declare class UpdateServerResponse extends SpeakeasyBase {
    contentType: string;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateServerResponse?: shared.UpdateServerResponse;
    validationException?: any;
}
