import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAnApiPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class DeleteAnApi200ApplicationJsonApi extends SpeakeasyBase {
    id?: string;
}
export declare class DeleteAnApi200ApplicationJson extends SpeakeasyBase {
    api?: DeleteAnApi200ApplicationJsonApi;
}
export declare class DeleteAnApiRequest extends SpeakeasyBase {
    pathParams: DeleteAnApiPathParams;
}
export declare class DeleteAnApiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteAnApi200ApplicationJsonObject?: DeleteAnApi200ApplicationJson;
}
