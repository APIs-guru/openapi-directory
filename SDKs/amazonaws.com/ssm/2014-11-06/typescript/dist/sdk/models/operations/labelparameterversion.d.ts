import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum LabelParameterVersionXAmzTargetEnum {
    AmazonSsmLabelParameterVersion = "AmazonSSM.LabelParameterVersion"
}
export declare class LabelParameterVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: LabelParameterVersionXAmzTargetEnum;
}
export declare class LabelParameterVersionRequest extends SpeakeasyBase {
    headers: LabelParameterVersionHeaders;
    request: shared.LabelParameterVersionRequest;
}
export declare class LabelParameterVersionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    labelParameterVersionResult?: shared.LabelParameterVersionResult;
    parameterNotFound?: any;
    parameterVersionLabelLimitExceeded?: any;
    parameterVersionNotFound?: any;
    statusCode: number;
    tooManyUpdates?: any;
}
