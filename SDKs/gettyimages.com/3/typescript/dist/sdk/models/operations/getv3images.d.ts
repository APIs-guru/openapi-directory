import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3ImagesQueryParams extends SpeakeasyBase {
    fields?: shared.ImageDetailFieldValuesEnum[];
    ids?: string[];
}
export declare class GetV3ImagesHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3ImagesRequest extends SpeakeasyBase {
    queryParams: GetV3ImagesQueryParams;
    headers: GetV3ImagesHeaders;
}
export declare class GetV3ImagesResponse extends SpeakeasyBase {
    contentType: string;
    imagesDetailResults?: shared.ImagesDetailResults;
    statusCode: number;
}
