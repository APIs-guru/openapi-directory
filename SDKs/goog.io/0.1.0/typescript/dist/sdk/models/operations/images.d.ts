import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImagesPathParams extends SpeakeasyBase {
    query: string;
}
export declare class Images200ApplicationJsonImageResultsImage extends SpeakeasyBase {
    alt?: string;
    src?: string;
}
export declare class Images200ApplicationJsonImageResultsLink extends SpeakeasyBase {
    domain?: string;
    href?: string;
    title?: string;
}
export declare class Images200ApplicationJsonImageResults extends SpeakeasyBase {
    image?: Images200ApplicationJsonImageResultsImage;
    link?: Images200ApplicationJsonImageResultsLink;
}
export declare class Images200ApplicationJson extends SpeakeasyBase {
    answers?: string[];
    imageResults?: Images200ApplicationJsonImageResults[];
    results?: Map<string, any>[];
    total?: number;
}
export declare class ImagesRequest extends SpeakeasyBase {
    pathParams: ImagesPathParams;
}
export declare class ImagesResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    images200ApplicationJsonObject?: Images200ApplicationJson;
    statusCode: number;
}
