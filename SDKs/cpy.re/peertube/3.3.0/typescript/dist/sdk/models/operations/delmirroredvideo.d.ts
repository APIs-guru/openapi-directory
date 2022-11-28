import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DelMirroredVideoPathParams extends SpeakeasyBase {
    redundancyId: string;
}
export declare class DelMirroredVideoSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DelMirroredVideoRequest extends SpeakeasyBase {
    pathParams: DelMirroredVideoPathParams;
    security: DelMirroredVideoSecurity;
}
export declare class DelMirroredVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
