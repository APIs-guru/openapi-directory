import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProjectsIdRequest extends SpeakeasyBase {
    pathParams: GetProjectsIdPathParams;
}
export declare class GetProjectsIdResponse extends SpeakeasyBase {
    contentType: string;
    projectEntity?: shared.ProjectEntity;
    statusCode: number;
}
