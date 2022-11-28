import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AvatarsGetFlagPathParams extends SpeakeasyBase {
    code: string;
}
export declare class AvatarsGetFlagQueryParams extends SpeakeasyBase {
    height?: number;
    quality?: number;
    width?: number;
}
export declare class AvatarsGetFlagSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class AvatarsGetFlagRequest extends SpeakeasyBase {
    pathParams: AvatarsGetFlagPathParams;
    queryParams: AvatarsGetFlagQueryParams;
    security: AvatarsGetFlagSecurity;
}
export declare class AvatarsGetFlagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
