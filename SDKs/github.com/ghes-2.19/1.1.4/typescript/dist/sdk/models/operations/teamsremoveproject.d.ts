import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsRemoveProjectPathParams extends SpeakeasyBase {
    projectId: number;
    teamId: number;
}
export declare class TeamsRemoveProjectRequest extends SpeakeasyBase {
    pathParams: TeamsRemoveProjectPathParams;
}
export declare class TeamsRemoveProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
