import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTestSuiteRelationsPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetTestSuiteRelations200ApplicationJsonTestsuite extends SpeakeasyBase {
    collectionId?: string;
    id?: string;
    name?: string;
    updatedAt?: string;
}
export declare class GetTestSuiteRelations200ApplicationJson extends SpeakeasyBase {
    testsuite?: GetTestSuiteRelations200ApplicationJsonTestsuite[];
}
export declare class GetTestSuiteRelationsRequest extends SpeakeasyBase {
    pathParams: GetTestSuiteRelationsPathParams;
}
export declare class GetTestSuiteRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTestSuiteRelations200ApplicationJsonObject?: GetTestSuiteRelations200ApplicationJson;
}
