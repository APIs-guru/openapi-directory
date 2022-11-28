import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectUsernameProjectPathParams extends SpeakeasyBase {
    project: string;
    username: string;
}
export declare class GetProjectUsernameProjectQueryParams extends SpeakeasyBase {
    filter?: shared.FilterEnum;
    limit?: number;
    offset?: number;
}
export declare class GetProjectUsernameProjectRequest extends SpeakeasyBase {
    pathParams: GetProjectUsernameProjectPathParams;
    queryParams: GetProjectUsernameProjectQueryParams;
}
export declare class GetProjectUsernameProjectResponse extends SpeakeasyBase {
    builds?: shared.Build[];
    contentType: string;
    statusCode: number;
}
