import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSectionPathParams extends SpeakeasyBase {
    sectionGid: string;
}
export declare class GetSectionQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetSection200ApplicationJson extends SpeakeasyBase {
    data?: shared.SectionResponse;
}
export declare class GetSectionRequest extends SpeakeasyBase {
    pathParams: GetSectionPathParams;
    queryParams: GetSectionQueryParams;
}
export declare class GetSectionResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getSection200ApplicationJsonObject?: GetSection200ApplicationJson;
}
