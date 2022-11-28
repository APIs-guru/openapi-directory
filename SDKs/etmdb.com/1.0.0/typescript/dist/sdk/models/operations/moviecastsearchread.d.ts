import { SpeakeasyBase } from "../../../internal/utils";
export declare class MovieCastSearchReadPathParams extends SpeakeasyBase {
    movieTitle: string;
}
export declare class MovieCastSearchReadRequest extends SpeakeasyBase {
    pathParams: MovieCastSearchReadPathParams;
}
export declare class MovieCastSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
