import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoStatusPathParams extends SpeakeasyBase {
    videoId: string;
}
export declare class GetVideoStatusSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetVideoStatusRequest extends SpeakeasyBase {
    pathParams: GetVideoStatusPathParams;
    security: GetVideoStatusSecurity;
}
export declare class GetVideoStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
    videostatus?: shared.Videostatus;
}
