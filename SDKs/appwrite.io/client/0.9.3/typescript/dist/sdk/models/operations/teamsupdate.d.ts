import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TeamsUpdatePathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class TeamsUpdateRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class TeamsUpdateSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class TeamsUpdateRequest extends SpeakeasyBase {
    pathParams: TeamsUpdatePathParams;
    request?: TeamsUpdateRequestBody;
    security: TeamsUpdateSecurity;
}
export declare class TeamsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    team?: shared.Team;
}
