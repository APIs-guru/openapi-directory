import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSectionPathParams extends SpeakeasyBase {
    sectionGid: string;
}
export declare class UpdateSectionQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class UpdateSectionRequestBody extends SpeakeasyBase {
    data?: shared.SectionRequest;
}
export declare class UpdateSection200ApplicationJson extends SpeakeasyBase {
    data?: shared.SectionResponse;
}
export declare class UpdateSectionRequest extends SpeakeasyBase {
    pathParams: UpdateSectionPathParams;
    queryParams: UpdateSectionQueryParams;
    request: UpdateSectionRequestBody;
}
export declare class UpdateSectionResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    updateSection200ApplicationJsonObject?: UpdateSection200ApplicationJson;
}
