import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsDeleteColumnPathParams extends SpeakeasyBase {
    columnId: number;
}
export declare class ProjectsDeleteColumnRequest extends SpeakeasyBase {
    pathParams: ProjectsDeleteColumnPathParams;
}
export declare class ProjectsDeleteColumnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
