import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateImageVersionXAmzTargetEnum {
    SageMakerCreateImageVersion = "SageMaker.CreateImageVersion"
}
export declare class CreateImageVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateImageVersionXAmzTargetEnum;
}
export declare class CreateImageVersionRequest extends SpeakeasyBase {
    headers: CreateImageVersionHeaders;
    request: shared.CreateImageVersionRequest;
}
export declare class CreateImageVersionResponse extends SpeakeasyBase {
    contentType: string;
    createImageVersionResponse?: shared.CreateImageVersionResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    statusCode: number;
}
