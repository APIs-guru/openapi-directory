import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AvatarsGetFaviconQueryParams extends SpeakeasyBase {
    url: string;
}
export declare class AvatarsGetFaviconSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class AvatarsGetFaviconRequest extends SpeakeasyBase {
    queryParams: AvatarsGetFaviconQueryParams;
    security: AvatarsGetFaviconSecurity;
}
export declare class AvatarsGetFaviconResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
