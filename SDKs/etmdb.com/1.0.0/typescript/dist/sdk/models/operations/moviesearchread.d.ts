import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class MovieSearchReadPathParams extends SpeakeasyBase {
    movieTitle: string;
}
export declare class MovieSearchReadRequest extends SpeakeasyBase {
    pathParams: MovieSearchReadPathParams;
}
export declare class MovieSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
