import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposSetTeamAccessRestrictionsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposSetTeamAccessRestrictionsRequestBody extends SpeakeasyBase {
    teams: string[];
}
export declare class ReposSetTeamAccessRestrictionsRequest extends SpeakeasyBase {
    pathParams: ReposSetTeamAccessRestrictionsPathParams;
    request?: ReposSetTeamAccessRestrictionsRequestBody;
}
export declare class ReposSetTeamAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teams?: shared.Team[];
    validationError?: shared.ValidationError;
}
