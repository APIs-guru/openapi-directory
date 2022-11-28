import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AvatarsGetQrQueryParams extends SpeakeasyBase {
    download?: boolean;
    margin?: number;
    size?: number;
    text: string;
}
export declare class AvatarsGetQrSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class AvatarsGetQrRequest extends SpeakeasyBase {
    queryParams: AvatarsGetQrQueryParams;
    security: AvatarsGetQrSecurity;
}
export declare class AvatarsGetQrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
