import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DelVideoPathParams extends SpeakeasyBase {
    id: any;
}
export declare class DelVideoSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DelVideoRequest extends SpeakeasyBase {
    pathParams: DelVideoPathParams;
    security: DelVideoSecurity;
}
export declare class DelVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
