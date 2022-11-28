import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateApiQueryParams extends SpeakeasyBase {
    workspace?: string;
}
export declare class CreateApiRequestBodyApi extends SpeakeasyBase {
    description?: string;
    name?: string;
    summary?: string;
}
export declare class CreateApiRequestBody extends SpeakeasyBase {
    api?: CreateApiRequestBodyApi;
}
export declare class CreateApi200ApplicationJsonApi extends SpeakeasyBase {
    createdAt?: string;
    createdBy?: string;
    description?: string;
    id?: string;
    name?: string;
    summary?: string;
    updatedAt?: string;
}
export declare class CreateApi200ApplicationJson extends SpeakeasyBase {
    api?: CreateApi200ApplicationJsonApi;
}
export declare class CreateApiRequest extends SpeakeasyBase {
    queryParams: CreateApiQueryParams;
    request?: CreateApiRequestBody;
}
export declare class CreateApiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createApi200ApplicationJsonObject?: CreateApi200ApplicationJson;
}
