import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TeamsDeletePathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class TeamsDeleteSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class TeamsDeleteRequest extends SpeakeasyBase {
    pathParams: TeamsDeletePathParams;
    security: TeamsDeleteSecurity;
}
export declare class TeamsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
