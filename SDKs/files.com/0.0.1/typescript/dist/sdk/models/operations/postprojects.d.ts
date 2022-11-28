import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProjectsRequestBody extends SpeakeasyBase {
    globalAccess: string;
}
export declare class PostProjectsRequest extends SpeakeasyBase {
    request: PostProjectsRequestBody;
}
export declare class PostProjectsResponse extends SpeakeasyBase {
    contentType: string;
    projectEntity?: shared.ProjectEntity;
    statusCode: number;
}
