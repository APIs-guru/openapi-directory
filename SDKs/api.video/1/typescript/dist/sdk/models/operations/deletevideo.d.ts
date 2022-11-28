import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoPathParams extends SpeakeasyBase {
    videoId: string;
}
export declare class DeleteVideoSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeleteVideoRequest extends SpeakeasyBase {
    pathParams: DeleteVideoPathParams;
    security: DeleteVideoSecurity;
}
export declare class DeleteVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
}
