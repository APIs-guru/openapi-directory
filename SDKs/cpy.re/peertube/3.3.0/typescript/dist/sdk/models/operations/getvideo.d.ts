import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoPathParams extends SpeakeasyBase {
    id: any;
}
export declare class GetVideoRequest extends SpeakeasyBase {
    pathParams: GetVideoPathParams;
}
export declare class GetVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoDetails?: shared.VideoDetails;
}
