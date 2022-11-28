import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UnlabelParameterVersionXAmzTargetEnum {
    AmazonSsmUnlabelParameterVersion = "AmazonSSM.UnlabelParameterVersion"
}
export declare class UnlabelParameterVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnlabelParameterVersionXAmzTargetEnum;
}
export declare class UnlabelParameterVersionRequest extends SpeakeasyBase {
    headers: UnlabelParameterVersionHeaders;
    request: shared.UnlabelParameterVersionRequest;
}
export declare class UnlabelParameterVersionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    parameterNotFound?: any;
    parameterVersionNotFound?: any;
    statusCode: number;
    tooManyUpdates?: any;
    unlabelParameterVersionResult?: shared.UnlabelParameterVersionResult;
}
