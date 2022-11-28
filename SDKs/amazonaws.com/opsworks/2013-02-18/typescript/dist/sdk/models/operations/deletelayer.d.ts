import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteLayerXAmzTargetEnum {
    OpsWorks20130218DeleteLayer = "OpsWorks_20130218.DeleteLayer"
}
export declare class DeleteLayerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLayerXAmzTargetEnum;
}
export declare class DeleteLayerRequest extends SpeakeasyBase {
    headers: DeleteLayerHeaders;
    request: shared.DeleteLayerRequest;
}
export declare class DeleteLayerResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
