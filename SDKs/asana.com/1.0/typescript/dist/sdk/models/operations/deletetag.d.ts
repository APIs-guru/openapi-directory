import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTagPathParams extends SpeakeasyBase {
    tagGid: string;
}
export declare class DeleteTagQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class DeleteTag200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class DeleteTagRequest extends SpeakeasyBase {
    pathParams: DeleteTagPathParams;
    queryParams: DeleteTagQueryParams;
}
export declare class DeleteTagResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    deleteTag200ApplicationJsonObject?: DeleteTag200ApplicationJson;
}
