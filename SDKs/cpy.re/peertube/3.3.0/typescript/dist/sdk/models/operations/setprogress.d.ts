import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetProgressPathParams extends SpeakeasyBase {
    id: any;
}
export declare class SetProgressSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class SetProgressRequest extends SpeakeasyBase {
    pathParams: SetProgressPathParams;
    request: any;
    security: SetProgressSecurity;
}
export declare class SetProgressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
