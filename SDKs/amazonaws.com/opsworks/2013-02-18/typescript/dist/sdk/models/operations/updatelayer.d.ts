import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateLayerXAmzTargetEnum {
    OpsWorks20130218UpdateLayer = "OpsWorks_20130218.UpdateLayer"
}
export declare class UpdateLayerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLayerXAmzTargetEnum;
}
export declare class UpdateLayerRequest extends SpeakeasyBase {
    headers: UpdateLayerHeaders;
    request: shared.UpdateLayerRequest;
}
export declare class UpdateLayerResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
