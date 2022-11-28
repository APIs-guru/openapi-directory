import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePlayersPlayerIdLogoPathParams extends SpeakeasyBase {
    playerId: string;
}
export declare class DeletePlayersPlayerIdLogoSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeletePlayersPlayerIdLogoRequest extends SpeakeasyBase {
    pathParams: DeletePlayersPlayerIdLogoPathParams;
    security: DeletePlayersPlayerIdLogoSecurity;
}
export declare class DeletePlayersPlayerIdLogoResponse extends SpeakeasyBase {
    contentType: string;
    deletePlayersPlayerIdLogo204ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
    notFound?: shared.NotFound;
}
