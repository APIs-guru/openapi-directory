import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteActionXAmzTargetEnum {
    SageMakerDeleteAction = "SageMaker.DeleteAction"
}
export declare class DeleteActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteActionXAmzTargetEnum;
}
export declare class DeleteActionRequest extends SpeakeasyBase {
    headers: DeleteActionHeaders;
    request: shared.DeleteActionRequest;
}
export declare class DeleteActionResponse extends SpeakeasyBase {
    contentType: string;
    deleteActionResponse?: shared.DeleteActionResponse;
    resourceNotFound?: any;
    statusCode: number;
}
