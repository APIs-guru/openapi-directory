import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateServerEngineAttributesXAmzTargetEnum {
    OpsWorksCmV20161101UpdateServerEngineAttributes = "OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes"
}
export declare class UpdateServerEngineAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServerEngineAttributesXAmzTargetEnum;
}
export declare class UpdateServerEngineAttributesRequest extends SpeakeasyBase {
    headers: UpdateServerEngineAttributesHeaders;
    request: shared.UpdateServerEngineAttributesRequest;
}
export declare class UpdateServerEngineAttributesResponse extends SpeakeasyBase {
    contentType: string;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateServerEngineAttributesResponse?: shared.UpdateServerEngineAttributesResponse;
    validationException?: any;
}
