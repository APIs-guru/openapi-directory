import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteMapPathParams extends SpeakeasyBase {
    mapName: string;
}
export declare class DeleteMapHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteMapRequest extends SpeakeasyBase {
    pathParams: DeleteMapPathParams;
    headers: DeleteMapHeaders;
}
export declare class DeleteMapResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteMapResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
