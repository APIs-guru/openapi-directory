import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeletePlaceIndexPathParams extends SpeakeasyBase {
    indexName: string;
}
export declare class DeletePlaceIndexHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeletePlaceIndexRequest extends SpeakeasyBase {
    pathParams: DeletePlaceIndexPathParams;
    headers: DeletePlaceIndexHeaders;
}
export declare class DeletePlaceIndexResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deletePlaceIndexResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
