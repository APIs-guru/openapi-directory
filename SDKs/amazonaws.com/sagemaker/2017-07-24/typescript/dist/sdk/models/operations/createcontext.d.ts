import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateContextXAmzTargetEnum {
    SageMakerCreateContext = "SageMaker.CreateContext"
}
export declare class CreateContextHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContextXAmzTargetEnum;
}
export declare class CreateContextRequest extends SpeakeasyBase {
    headers: CreateContextHeaders;
    request: shared.CreateContextRequest;
}
export declare class CreateContextResponse extends SpeakeasyBase {
    contentType: string;
    createContextResponse?: shared.CreateContextResponse;
    resourceLimitExceeded?: any;
    statusCode: number;
}
