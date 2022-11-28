import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AvatarsGetImageQueryParams extends SpeakeasyBase {
    height?: number;
    url: string;
    width?: number;
}
export declare class AvatarsGetImageSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class AvatarsGetImageRequest extends SpeakeasyBase {
    queryParams: AvatarsGetImageQueryParams;
    security: AvatarsGetImageSecurity;
}
export declare class AvatarsGetImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
