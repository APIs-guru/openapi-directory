import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetLegacyPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsGetLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsGetLegacyPathParams;
}
export declare class TeamsGetLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    teamFull?: shared.TeamFull;
}
