import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InsertSectionForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class InsertSectionForProjectQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class InsertSectionForProjectRequestBody extends SpeakeasyBase {
    data?: shared.ProjectSectionInsertRequest;
}
export declare class InsertSectionForProject200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class InsertSectionForProjectRequest extends SpeakeasyBase {
    pathParams: InsertSectionForProjectPathParams;
    queryParams: InsertSectionForProjectQueryParams;
    request: InsertSectionForProjectRequestBody;
}
export declare class InsertSectionForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    insertSectionForProject200ApplicationJsonObject?: InsertSectionForProject200ApplicationJson;
}
