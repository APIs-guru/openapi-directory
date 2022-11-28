import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLinkedRelationsPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetLinkedRelations200ApplicationJsonRelationsContracttest2a9b8fa888b74b8683728e3f6f6e07f2 extends SpeakeasyBase {
    id?: string;
    name?: string;
    updatedAt?: string;
}
export declare class GetLinkedRelations200ApplicationJsonRelationsContracttest extends SpeakeasyBase {
    twoa9b8fa888b74b8683728e3f6f6e07f2?: GetLinkedRelations200ApplicationJsonRelationsContracttest2a9b8fa888b74b8683728e3f6f6e07f2;
}
export declare class GetLinkedRelations200ApplicationJsonRelationsIntegrationtest521b0486Ab914d3a918943c9380a0533 extends SpeakeasyBase {
    id?: string;
    name?: string;
    updatedAt?: string;
}
export declare class GetLinkedRelations200ApplicationJsonRelationsIntegrationtestA236b715E682460b97b6C1db24f7612e extends SpeakeasyBase {
    id?: string;
    name?: string;
    updatedAt?: string;
}
export declare class GetLinkedRelations200ApplicationJsonRelationsIntegrationtest extends SpeakeasyBase {
    fiveHundredAndTwentyOneb0486Ab914d3a918943c9380a0533?: GetLinkedRelations200ApplicationJsonRelationsIntegrationtest521b0486Ab914d3a918943c9380a0533;
    a236b715E682460b97b6C1db24f7612e?: GetLinkedRelations200ApplicationJsonRelationsIntegrationtestA236b715E682460b97b6C1db24f7612e;
}
export declare class GetLinkedRelations200ApplicationJsonRelationsMock4ccd755f2c80481bA26249b55e12f5e1 extends SpeakeasyBase {
    id?: string;
    name?: string;
    updatedAt?: string;
    url?: string;
}
export declare class GetLinkedRelations200ApplicationJsonRelationsMock extends SpeakeasyBase {
    fourccd755f2c80481bA26249b55e12f5e1?: GetLinkedRelations200ApplicationJsonRelationsMock4ccd755f2c80481bA26249b55e12f5e1;
}
export declare class GetLinkedRelations200ApplicationJsonRelations extends SpeakeasyBase {
    contracttest?: GetLinkedRelations200ApplicationJsonRelationsContracttest;
    integrationtest?: GetLinkedRelations200ApplicationJsonRelationsIntegrationtest;
    mock?: GetLinkedRelations200ApplicationJsonRelationsMock;
}
export declare class GetLinkedRelations200ApplicationJson extends SpeakeasyBase {
    relations?: GetLinkedRelations200ApplicationJsonRelations;
}
export declare class GetLinkedRelationsRequest extends SpeakeasyBase {
    pathParams: GetLinkedRelationsPathParams;
}
export declare class GetLinkedRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLinkedRelations200ApplicationJsonObject?: GetLinkedRelations200ApplicationJson;
}
