import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePlayersPlayerIdPathParams extends SpeakeasyBase {
    playerId: string;
}
export declare class DeletePlayersPlayerIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeletePlayersPlayerIdRequest extends SpeakeasyBase {
    pathParams: DeletePlayersPlayerIdPathParams;
    security: DeletePlayersPlayerIdSecurity;
}
export declare class DeletePlayersPlayerIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
}
