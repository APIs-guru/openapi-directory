import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteContextXAmzTargetEnum {
    SageMakerDeleteContext = "SageMaker.DeleteContext"
}
export declare class DeleteContextHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteContextXAmzTargetEnum;
}
export declare class DeleteContextRequest extends SpeakeasyBase {
    headers: DeleteContextHeaders;
    request: shared.DeleteContextRequest;
}
export declare class DeleteContextResponse extends SpeakeasyBase {
    contentType: string;
    deleteContextResponse?: shared.DeleteContextResponse;
    resourceNotFound?: any;
    statusCode: number;
}
