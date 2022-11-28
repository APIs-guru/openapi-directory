import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteFeatureGroupXAmzTargetEnum {
    SageMakerDeleteFeatureGroup = "SageMaker.DeleteFeatureGroup"
}
export declare class DeleteFeatureGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFeatureGroupXAmzTargetEnum;
}
export declare class DeleteFeatureGroupRequest extends SpeakeasyBase {
    headers: DeleteFeatureGroupHeaders;
    request: shared.DeleteFeatureGroupRequest;
}
export declare class DeleteFeatureGroupResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
