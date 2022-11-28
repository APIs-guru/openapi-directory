import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetContractTestRelationsPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetContractTestRelations200ApplicationJsonContracttest extends SpeakeasyBase {
    collectionId?: string;
    id?: string;
    name?: string;
    updatedAt?: string;
}
export declare class GetContractTestRelations200ApplicationJson extends SpeakeasyBase {
    contracttest?: GetContractTestRelations200ApplicationJsonContracttest[];
}
export declare class GetContractTestRelationsRequest extends SpeakeasyBase {
    pathParams: GetContractTestRelationsPathParams;
}
export declare class GetContractTestRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getContractTestRelations200ApplicationJsonObject?: GetContractTestRelations200ApplicationJson;
}
