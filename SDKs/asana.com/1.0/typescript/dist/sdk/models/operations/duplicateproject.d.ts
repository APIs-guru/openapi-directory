import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DuplicateProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class DuplicateProjectQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class DuplicateProjectRequestBody extends SpeakeasyBase {
    data?: shared.ProjectDuplicateRequest;
}
export declare class DuplicateProject201ApplicationJson extends SpeakeasyBase {
    data?: shared.JobResponse;
}
export declare class DuplicateProjectRequest extends SpeakeasyBase {
    pathParams: DuplicateProjectPathParams;
    queryParams: DuplicateProjectQueryParams;
    request?: DuplicateProjectRequestBody;
}
export declare class DuplicateProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    duplicateProject201ApplicationJsonObject?: DuplicateProject201ApplicationJson;
}
