import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class TeamsGetSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class TeamsGetRequest extends SpeakeasyBase {
    pathParams: TeamsGetPathParams;
    security: TeamsGetSecurity;
}
export declare class TeamsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    team?: shared.Team;
}
