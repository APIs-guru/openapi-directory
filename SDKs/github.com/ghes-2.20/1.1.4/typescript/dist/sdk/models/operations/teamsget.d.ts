import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsGetRequest extends SpeakeasyBase {
    pathParams: TeamsGetPathParams;
}
export declare class TeamsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamFull?: shared.TeamFull;
}
