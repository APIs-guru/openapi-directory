import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DelVideoCaptionPathParams extends SpeakeasyBase {
    captionLanguage: string;
    id: any;
}
export declare class DelVideoCaptionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DelVideoCaptionRequest extends SpeakeasyBase {
    pathParams: DelVideoCaptionPathParams;
    security: DelVideoCaptionSecurity;
}
export declare class DelVideoCaptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
