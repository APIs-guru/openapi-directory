import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteEnvironmentPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DeleteEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteEnvironmentRequest extends SpeakeasyBase {
    pathParams: DeleteEnvironmentPathParams;
    headers: DeleteEnvironmentHeaders;
}
export declare class DeleteEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    deleteEnvironmentOutput?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
