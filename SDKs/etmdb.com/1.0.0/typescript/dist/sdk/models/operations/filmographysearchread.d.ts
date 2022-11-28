import { SpeakeasyBase } from "../../../internal/utils";
export declare class FilmographySearchReadPathParams extends SpeakeasyBase {
    movieTitle: string;
}
export declare class FilmographySearchReadRequest extends SpeakeasyBase {
    pathParams: FilmographySearchReadPathParams;
}
export declare class FilmographySearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
