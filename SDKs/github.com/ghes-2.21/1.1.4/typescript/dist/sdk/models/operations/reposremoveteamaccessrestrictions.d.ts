import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposRemoveTeamAccessRestrictionsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposRemoveTeamAccessRestrictionsRequestBody1 extends SpeakeasyBase {
    teams: string[];
}
export declare class ReposRemoveTeamAccessRestrictionsRequest extends SpeakeasyBase {
    pathParams: ReposRemoveTeamAccessRestrictionsPathParams;
    request?: any;
}
export declare class ReposRemoveTeamAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teams?: shared.Team[];
    validationError?: shared.ValidationError;
}
