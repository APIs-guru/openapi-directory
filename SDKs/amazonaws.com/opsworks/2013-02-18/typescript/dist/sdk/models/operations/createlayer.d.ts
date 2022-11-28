import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLayerXAmzTargetEnum {
    OpsWorks20130218CreateLayer = "OpsWorks_20130218.CreateLayer"
}
export declare class CreateLayerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLayerXAmzTargetEnum;
}
export declare class CreateLayerRequest extends SpeakeasyBase {
    headers: CreateLayerHeaders;
    request: shared.CreateLayerRequest;
}
export declare class CreateLayerResponse extends SpeakeasyBase {
    contentType: string;
    createLayerResult?: shared.CreateLayerResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
