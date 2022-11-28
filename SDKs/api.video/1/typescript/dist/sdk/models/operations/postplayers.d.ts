import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPlayersSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostPlayersRequest extends SpeakeasyBase {
    request: shared.Playerinput;
    security: PostPlayersSecurity;
}
export declare class PostPlayersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    player?: shared.Player;
}
