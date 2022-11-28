import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersMeVideosImportsQueryParams extends SpeakeasyBase {
    count?: number;
    sort?: string;
    start?: number;
}
export declare class GetUsersMeVideosImportsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUsersMeVideosImportsRequest extends SpeakeasyBase {
    queryParams: GetUsersMeVideosImportsQueryParams;
    security: GetUsersMeVideosImportsSecurity;
}
export declare class GetUsersMeVideosImportsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoImportsList?: any;
}
