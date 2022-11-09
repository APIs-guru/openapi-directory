import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GenreSearchReadPathParams extends SpeakeasyBase {
    movieTitle: string;
}
export declare class GenreSearchReadRequest extends SpeakeasyBase {
    pathParams: GenreSearchReadPathParams;
}
export declare class GenreSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
