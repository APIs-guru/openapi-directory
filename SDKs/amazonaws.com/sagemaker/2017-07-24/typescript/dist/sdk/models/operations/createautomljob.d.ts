import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAutoMlJobXAmzTargetEnum {
    SageMakerCreateAutoMlJob = "SageMaker.CreateAutoMLJob"
}
export declare class CreateAutoMlJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAutoMlJobXAmzTargetEnum;
}
export declare class CreateAutoMlJobRequest extends SpeakeasyBase {
    headers: CreateAutoMlJobHeaders;
    request: shared.CreateAutoMlJobRequest;
}
export declare class CreateAutoMlJobResponse extends SpeakeasyBase {
    contentType: string;
    createAutoMlJobResponse?: shared.CreateAutoMlJobResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
