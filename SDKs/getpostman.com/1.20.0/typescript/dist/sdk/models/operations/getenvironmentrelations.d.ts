import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEnvironmentRelationsPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetEnvironmentRelations200ApplicationJsonEnvironment extends SpeakeasyBase {
    id?: string;
    name?: string;
    updatedAt?: string;
}
export declare class GetEnvironmentRelations200ApplicationJson extends SpeakeasyBase {
    environment?: GetEnvironmentRelations200ApplicationJsonEnvironment[];
}
export declare class GetEnvironmentRelationsRequest extends SpeakeasyBase {
    pathParams: GetEnvironmentRelationsPathParams;
}
export declare class GetEnvironmentRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getEnvironmentRelations200ApplicationJsonObject?: GetEnvironmentRelations200ApplicationJson;
}
