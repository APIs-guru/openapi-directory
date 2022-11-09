import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContractTestRelationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetContractTestRelationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContractTestRelationsPathParams;
}


export class GetContractTestRelations200ApplicationJsonContracttest extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionId" })
  collectionId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetContractTestRelations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=contracttest", elemType: operations.GetContractTestRelations200ApplicationJsonContracttest })
  contracttest?: GetContractTestRelations200ApplicationJsonContracttest[];
}


export class GetContractTestRelationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getContractTestRelations200ApplicationJsonObject?: GetContractTestRelations200ApplicationJson;
}
