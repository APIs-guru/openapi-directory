import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetIntegrationTestRelationsPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetIntegrationTestRelations200ApplicationJsonIntegrationtest extends SpeakeasyBase {
    collectionId?: string;
    id?: string;
    name?: string;
    updatedAt?: string;
}
export declare class GetIntegrationTestRelations200ApplicationJson extends SpeakeasyBase {
    integrationtest?: GetIntegrationTestRelations200ApplicationJsonIntegrationtest[];
}
export declare class GetIntegrationTestRelationsRequest extends SpeakeasyBase {
    pathParams: GetIntegrationTestRelationsPathParams;
}
export declare class GetIntegrationTestRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getIntegrationTestRelations200ApplicationJsonObject?: GetIntegrationTestRelations200ApplicationJson;
}
