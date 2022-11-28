import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteImageVersionXAmzTargetEnum {
    SageMakerDeleteImageVersion = "SageMaker.DeleteImageVersion"
}
export declare class DeleteImageVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteImageVersionXAmzTargetEnum;
}
export declare class DeleteImageVersionRequest extends SpeakeasyBase {
    headers: DeleteImageVersionHeaders;
    request: shared.DeleteImageVersionRequest;
}
export declare class DeleteImageVersionResponse extends SpeakeasyBase {
    contentType: string;
    deleteImageVersionResponse?: Map<string, any>;
    resourceInUse?: any;
    resourceNotFound?: any;
    statusCode: number;
}
