import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateAnApiPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class UpdateAnApiRequestBodyApi extends SpeakeasyBase {
    description?: string;
    name?: string;
}
export declare class UpdateAnApiRequestBody extends SpeakeasyBase {
    api?: UpdateAnApiRequestBodyApi;
}
export declare class UpdateAnApi200ApplicationJsonApi extends SpeakeasyBase {
    createdAt?: string;
    createdBy?: string;
    description?: string;
    id?: string;
    name?: string;
    summary?: string;
    updatedAt?: string;
}
export declare class UpdateAnApi200ApplicationJson extends SpeakeasyBase {
    api?: UpdateAnApi200ApplicationJsonApi;
}
export declare class UpdateAnApiRequest extends SpeakeasyBase {
    pathParams: UpdateAnApiPathParams;
    request?: UpdateAnApiRequestBody;
}
export declare class UpdateAnApiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateAnApi200ApplicationJsonObject?: UpdateAnApi200ApplicationJson;
}
