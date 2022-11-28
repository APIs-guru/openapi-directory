import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectsQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetProjectsRequest extends SpeakeasyBase {
    queryParams: GetProjectsQueryParams;
}
export declare class GetProjectsResponse extends SpeakeasyBase {
    contentType: string;
    projectEntities?: shared.ProjectEntity[];
    statusCode: number;
}
