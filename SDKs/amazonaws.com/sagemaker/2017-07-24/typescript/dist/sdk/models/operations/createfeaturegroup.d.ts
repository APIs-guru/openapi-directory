import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateFeatureGroupXAmzTargetEnum {
    SageMakerCreateFeatureGroup = "SageMaker.CreateFeatureGroup"
}
export declare class CreateFeatureGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFeatureGroupXAmzTargetEnum;
}
export declare class CreateFeatureGroupRequest extends SpeakeasyBase {
    headers: CreateFeatureGroupHeaders;
    request: shared.CreateFeatureGroupRequest;
}
export declare class CreateFeatureGroupResponse extends SpeakeasyBase {
    contentType: string;
    createFeatureGroupResponse?: shared.CreateFeatureGroupResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
