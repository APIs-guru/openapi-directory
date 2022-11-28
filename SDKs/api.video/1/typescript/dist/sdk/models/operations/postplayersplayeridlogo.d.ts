import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPlayersPlayerIdLogoPathParams extends SpeakeasyBase {
    playerId: string;
}
export declare class PostPlayersPlayerIdLogoSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostPlayersPlayerIdLogoRequest extends SpeakeasyBase {
    pathParams: PostPlayersPlayerIdLogoPathParams;
    request?: shared.PlayersUploadLogoPayload;
    security: PostPlayersPlayerIdLogoSecurity;
}
export declare class PostPlayersPlayerIdLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    notFound?: shared.NotFound;
    player?: shared.Player;
}
