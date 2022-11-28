import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSectionForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class CreateSectionForProjectQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateSectionForProjectRequestBody extends SpeakeasyBase {
    data?: shared.SectionRequest;
}
export declare class CreateSectionForProject201ApplicationJson extends SpeakeasyBase {
    data?: shared.SectionResponse;
}
export declare class CreateSectionForProjectRequest extends SpeakeasyBase {
    pathParams: CreateSectionForProjectPathParams;
    queryParams: CreateSectionForProjectQueryParams;
    request: CreateSectionForProjectRequestBody;
}
export declare class CreateSectionForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createSectionForProject201ApplicationJsonObject?: CreateSectionForProject201ApplicationJson;
}
