import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchProjectsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PatchProjectsIdRequestBody extends SpeakeasyBase {
    globalAccess: string;
}
export declare class PatchProjectsIdRequest extends SpeakeasyBase {
    pathParams: PatchProjectsIdPathParams;
    request: PatchProjectsIdRequestBody;
}
export declare class PatchProjectsIdResponse extends SpeakeasyBase {
    contentType: string;
    projectEntity?: shared.ProjectEntity;
    statusCode: number;
}
