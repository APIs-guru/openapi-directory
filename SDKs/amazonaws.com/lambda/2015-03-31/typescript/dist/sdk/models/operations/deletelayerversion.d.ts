import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteLayerVersionPathParams extends SpeakeasyBase {
    layerName: string;
    versionNumber: number;
}
export declare class DeleteLayerVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteLayerVersionRequest extends SpeakeasyBase {
    pathParams: DeleteLayerVersionPathParams;
    headers: DeleteLayerVersionHeaders;
}
export declare class DeleteLayerVersionResponse extends SpeakeasyBase {
    contentType: string;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
