import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhotostreamContextByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    photoId: string;
}
export declare class GetPhotostreamContextById200ApplicationJsonCount extends SpeakeasyBase {
    content?: string;
}
export declare class GetPhotostreamContextById200ApplicationJson extends SpeakeasyBase {
    count?: GetPhotostreamContextById200ApplicationJsonCount;
    nextphoto?: shared.ContextPhoto;
    prevphoto?: shared.ContextPhoto;
    stat?: string;
}
export declare class GetPhotostreamContextByIdRequest extends SpeakeasyBase {
    queryParams: GetPhotostreamContextByIdQueryParams;
}
export declare class GetPhotostreamContextByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPhotostreamContextById200ApplicationJsonObject?: GetPhotostreamContextById200ApplicationJson;
}
