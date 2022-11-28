import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetByNamePathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
}
export declare class TeamsGetByNameRequest extends SpeakeasyBase {
    pathParams: TeamsGetByNamePathParams;
}
export declare class TeamsGetByNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    teamFull?: shared.TeamFull;
}
