import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AvatarsGetInitialsQueryParams extends SpeakeasyBase {
    background?: string;
    color?: string;
    height?: number;
    name?: string;
    width?: number;
}
export declare class AvatarsGetInitialsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class AvatarsGetInitialsRequest extends SpeakeasyBase {
    queryParams: AvatarsGetInitialsQueryParams;
    security: AvatarsGetInitialsSecurity;
}
export declare class AvatarsGetInitialsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
