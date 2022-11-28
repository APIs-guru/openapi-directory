import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsRemoveRepoLegacyPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    teamId: number;
}
export declare class TeamsRemoveRepoLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsRemoveRepoLegacyPathParams;
}
export declare class TeamsRemoveRepoLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
