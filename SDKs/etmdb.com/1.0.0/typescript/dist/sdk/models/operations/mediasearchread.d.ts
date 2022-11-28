import { SpeakeasyBase } from "../../../internal/utils";
export declare class MediaSearchReadPathParams extends SpeakeasyBase {
    movieTitle: string;
}
export declare class MediaSearchReadRequest extends SpeakeasyBase {
    pathParams: MediaSearchReadPathParams;
}
export declare class MediaSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
