import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteHumanTaskUiXAmzTargetEnum {
    SageMakerDeleteHumanTaskUi = "SageMaker.DeleteHumanTaskUi"
}
export declare class DeleteHumanTaskUiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteHumanTaskUiXAmzTargetEnum;
}
export declare class DeleteHumanTaskUiRequest extends SpeakeasyBase {
    headers: DeleteHumanTaskUiHeaders;
    request: shared.DeleteHumanTaskUiRequest;
}
export declare class DeleteHumanTaskUiResponse extends SpeakeasyBase {
    contentType: string;
    deleteHumanTaskUiResponse?: Map<string, any>;
    resourceNotFound?: any;
    statusCode: number;
}
