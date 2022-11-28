import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCodeSigningConfigPathParams extends SpeakeasyBase {
    codeSigningConfigArn: string;
}
export declare class GetCodeSigningConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCodeSigningConfigRequest extends SpeakeasyBase {
    pathParams: GetCodeSigningConfigPathParams;
    headers: GetCodeSigningConfigHeaders;
}
export declare class GetCodeSigningConfigResponse extends SpeakeasyBase {
    contentType: string;
    getCodeSigningConfigResponse?: shared.GetCodeSigningConfigResponse;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
}
