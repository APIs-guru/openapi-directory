import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TeamsCreateRequestBody extends SpeakeasyBase {
    name: string;
    roles?: string[];
}
export declare class TeamsCreateSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class TeamsCreateRequest extends SpeakeasyBase {
    request?: TeamsCreateRequestBody;
    security: TeamsCreateSecurity;
}
export declare class TeamsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    team?: shared.Team;
}
