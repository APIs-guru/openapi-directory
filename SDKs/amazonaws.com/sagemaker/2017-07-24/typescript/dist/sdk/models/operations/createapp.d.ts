import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAppXAmzTargetEnum {
    SageMakerCreateApp = "SageMaker.CreateApp"
}
export declare class CreateAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAppXAmzTargetEnum;
}
export declare class CreateAppRequest extends SpeakeasyBase {
    headers: CreateAppHeaders;
    request: shared.CreateAppRequest;
}
export declare class CreateAppResponse extends SpeakeasyBase {
    contentType: string;
    createAppResponse?: shared.CreateAppResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
