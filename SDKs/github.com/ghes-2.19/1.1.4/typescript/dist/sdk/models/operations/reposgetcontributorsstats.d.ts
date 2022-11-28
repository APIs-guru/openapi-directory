import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetContributorsStatsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetContributorsStatsRequest extends SpeakeasyBase {
    pathParams: ReposGetContributorsStatsPathParams;
}
export declare class ReposGetContributorsStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    contributorActivities?: shared.ContributorActivity[];
    reposGetContributorsStats202ApplicationJsonObject?: Map<string, any>;
}
