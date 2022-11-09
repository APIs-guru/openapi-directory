import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteCodeSigningConfigPathParams extends SpeakeasyBase {
    codeSigningConfigArn: string;
}
export declare class DeleteCodeSigningConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCodeSigningConfigRequest extends SpeakeasyBase {
    pathParams: DeleteCodeSigningConfigPathParams;
    headers: DeleteCodeSigningConfigHeaders;
}
export declare class DeleteCodeSigningConfigResponse extends SpeakeasyBase {
    contentType: string;
    deleteCodeSigningConfigResponse?: Map<string, any>;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
}
