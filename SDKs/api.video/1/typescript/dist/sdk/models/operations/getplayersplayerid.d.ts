import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlayersPlayerIdPathParams extends SpeakeasyBase {
    playerId: string;
}
export declare class GetPlayersPlayerIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetPlayersPlayerIdRequest extends SpeakeasyBase {
    pathParams: GetPlayersPlayerIdPathParams;
    security: GetPlayersPlayerIdSecurity;
}
export declare class GetPlayersPlayerIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
    player?: shared.Player;
}
