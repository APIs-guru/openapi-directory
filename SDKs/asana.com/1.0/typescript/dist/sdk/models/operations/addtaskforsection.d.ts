import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddTaskForSectionPathParams extends SpeakeasyBase {
    sectionGid: string;
}
export declare class AddTaskForSectionQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddTaskForSectionRequestBody extends SpeakeasyBase {
    data?: shared.SectionTaskInsertRequest;
}
export declare class AddTaskForSection200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class AddTaskForSectionRequest extends SpeakeasyBase {
    pathParams: AddTaskForSectionPathParams;
    queryParams: AddTaskForSectionQueryParams;
    request: AddTaskForSectionRequestBody;
}
export declare class AddTaskForSectionResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addTaskForSection200ApplicationJsonObject?: AddTaskForSection200ApplicationJson;
}
