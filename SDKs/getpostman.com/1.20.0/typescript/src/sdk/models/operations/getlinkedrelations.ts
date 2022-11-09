import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLinkedRelationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetLinkedRelationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinkedRelationsPathParams;
}


export class GetLinkedRelations200ApplicationJsonRelationsContracttest2a9b8fa888b74b8683728e3f6f6e07f2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetLinkedRelations200ApplicationJsonRelationsContracttest extends SpeakeasyBase {
  @Metadata({ data: "json, name=2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2" })
  twoa9b8fa888b74b8683728e3f6f6e07f2?: GetLinkedRelations200ApplicationJsonRelationsContracttest2a9b8fa888b74b8683728e3f6f6e07f2;
}


export class GetLinkedRelations200ApplicationJsonRelationsIntegrationtest521b0486Ab914d3a918943c9380a0533 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetLinkedRelations200ApplicationJsonRelationsIntegrationtestA236b715E682460b97b6C1db24f7612e extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetLinkedRelations200ApplicationJsonRelationsIntegrationtest extends SpeakeasyBase {
  @Metadata({ data: "json, name=521b0486-ab91-4d3a-9189-43c9380a0533" })
  fiveHundredAndTwentyOneb0486Ab914d3a918943c9380a0533?: GetLinkedRelations200ApplicationJsonRelationsIntegrationtest521b0486Ab914d3a918943c9380a0533;

  @Metadata({ data: "json, name=a236b715-e682-460b-97b6-c1db24f7612e" })
  a236b715E682460b97b6C1db24f7612e?: GetLinkedRelations200ApplicationJsonRelationsIntegrationtestA236b715E682460b97b6C1db24f7612e;
}


export class GetLinkedRelations200ApplicationJsonRelationsMock4ccd755f2c80481bA26249b55e12f5e1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetLinkedRelations200ApplicationJsonRelationsMock extends SpeakeasyBase {
  @Metadata({ data: "json, name=4ccd755f-2c80-481b-a262-49b55e12f5e1" })
  fourccd755f2c80481bA26249b55e12f5e1?: GetLinkedRelations200ApplicationJsonRelationsMock4ccd755f2c80481bA26249b55e12f5e1;
}


export class GetLinkedRelations200ApplicationJsonRelations extends SpeakeasyBase {
  @Metadata({ data: "json, name=contracttest" })
  contracttest?: GetLinkedRelations200ApplicationJsonRelationsContracttest;

  @Metadata({ data: "json, name=integrationtest" })
  integrationtest?: GetLinkedRelations200ApplicationJsonRelationsIntegrationtest;

  @Metadata({ data: "json, name=mock" })
  mock?: GetLinkedRelations200ApplicationJsonRelationsMock;
}


export class GetLinkedRelations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=relations" })
  relations?: GetLinkedRelations200ApplicationJsonRelations;
}


export class GetLinkedRelationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinkedRelations200ApplicationJsonObject?: GetLinkedRelations200ApplicationJson;
}
