import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsRemoveRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    teamId: number;
}
export declare class TeamsRemoveRepoRequest extends SpeakeasyBase {
    pathParams: TeamsRemoveRepoPathParams;
}
export declare class TeamsRemoveRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
