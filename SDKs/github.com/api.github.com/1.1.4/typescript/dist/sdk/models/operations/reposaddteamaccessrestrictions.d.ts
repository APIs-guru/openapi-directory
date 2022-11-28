import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposAddTeamAccessRestrictionsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposAddTeamAccessRestrictionsRequestBody extends SpeakeasyBase {
    teams: string[];
}
export declare class ReposAddTeamAccessRestrictionsRequest extends SpeakeasyBase {
    pathParams: ReposAddTeamAccessRestrictionsPathParams;
    request?: ReposAddTeamAccessRestrictionsRequestBody;
}
export declare class ReposAddTeamAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teams?: shared.Team[];
    validationError?: shared.ValidationError;
}
