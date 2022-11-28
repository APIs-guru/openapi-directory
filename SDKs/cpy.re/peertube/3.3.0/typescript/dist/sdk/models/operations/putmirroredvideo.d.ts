import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutMirroredVideoRequestBody extends SpeakeasyBase {
    videoId: number;
}
export declare class PutMirroredVideoSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutMirroredVideoRequest extends SpeakeasyBase {
    request?: PutMirroredVideoRequestBody;
    security: PutMirroredVideoSecurity;
}
export declare class PutMirroredVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
