import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AvatarsGetBrowserPathParams extends SpeakeasyBase {
    code: string;
}
export declare class AvatarsGetBrowserQueryParams extends SpeakeasyBase {
    height?: number;
    quality?: number;
    width?: number;
}
export declare class AvatarsGetBrowserSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class AvatarsGetBrowserRequest extends SpeakeasyBase {
    pathParams: AvatarsGetBrowserPathParams;
    queryParams: AvatarsGetBrowserQueryParams;
    security: AvatarsGetBrowserSecurity;
}
export declare class AvatarsGetBrowserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
