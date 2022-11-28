import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateHumanTaskUiXAmzTargetEnum {
    SageMakerCreateHumanTaskUi = "SageMaker.CreateHumanTaskUi"
}
export declare class CreateHumanTaskUiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHumanTaskUiXAmzTargetEnum;
}
export declare class CreateHumanTaskUiRequest extends SpeakeasyBase {
    headers: CreateHumanTaskUiHeaders;
    request: shared.CreateHumanTaskUiRequest;
}
export declare class CreateHumanTaskUiResponse extends SpeakeasyBase {
    contentType: string;
    createHumanTaskUiResponse?: shared.CreateHumanTaskUiResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
