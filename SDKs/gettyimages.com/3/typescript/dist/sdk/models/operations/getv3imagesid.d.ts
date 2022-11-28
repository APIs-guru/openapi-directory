import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3ImagesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetV3ImagesIdQueryParams extends SpeakeasyBase {
    fields?: shared.ImageDetailFieldValuesEnum[];
}
export declare class GetV3ImagesIdHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3ImagesIdRequest extends SpeakeasyBase {
    pathParams: GetV3ImagesIdPathParams;
    queryParams: GetV3ImagesIdQueryParams;
    headers: GetV3ImagesIdHeaders;
}
export declare class GetV3ImagesIdResponse extends SpeakeasyBase {
    contentType: string;
    imagesDetailResults?: shared.ImagesDetailResults;
    statusCode: number;
}
