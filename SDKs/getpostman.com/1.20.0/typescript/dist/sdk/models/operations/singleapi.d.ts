import { SpeakeasyBase } from "../../../internal/utils";
export declare class SingleApiPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class SingleApi200ApplicationJsonApi extends SpeakeasyBase {
    createdAt?: string;
    createdBy?: string;
    description?: string;
    id?: string;
    name?: string;
    summary?: string;
    updatedAt?: string;
}
export declare class SingleApi200ApplicationJson extends SpeakeasyBase {
    api?: SingleApi200ApplicationJsonApi;
}
export declare class SingleApiRequest extends SpeakeasyBase {
    pathParams: SingleApiPathParams;
}
export declare class SingleApiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    singleApi200ApplicationJsonObject?: SingleApi200ApplicationJson;
}
