import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchPlayersPlayerIdPathParams extends SpeakeasyBase {
    playerId: string;
}
export declare class PatchPlayersPlayerIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PatchPlayersPlayerIdRequest extends SpeakeasyBase {
    pathParams: PatchPlayersPlayerIdPathParams;
    request: shared.Playerinput;
    security: PatchPlayersPlayerIdSecurity;
}
export declare class PatchPlayersPlayerIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
    player?: shared.Player;
}
