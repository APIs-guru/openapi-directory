import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    orderType?: string;
    search?: string;
}
export declare class TeamsListSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class TeamsListRequest extends SpeakeasyBase {
    queryParams: TeamsListQueryParams;
    security: TeamsListSecurity;
}
export declare class TeamsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamList?: shared.TeamList;
}
