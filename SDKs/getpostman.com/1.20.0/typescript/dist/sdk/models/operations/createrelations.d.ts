import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateRelationsPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class CreateRelationsRequestBody extends SpeakeasyBase {
    contracttest?: string[];
    documentation?: string[];
    mock?: string[];
    testsuite?: string[];
}
export declare class CreateRelations200ApplicationJson extends SpeakeasyBase {
    contracttest?: string[];
    documentation?: string[];
    testsuite?: string[];
}
export declare class CreateRelationsRequest extends SpeakeasyBase {
    pathParams: CreateRelationsPathParams;
    request?: CreateRelationsRequestBody;
}
export declare class CreateRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createRelations200ApplicationJsonObject?: CreateRelations200ApplicationJson;
}
