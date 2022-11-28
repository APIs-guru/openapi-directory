import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContractTestRelationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetContractTestRelations200ApplicationJsonContracttest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionId" })
  collectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetContractTestRelations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contracttest", elemType: GetContractTestRelations200ApplicationJsonContracttest })
  contracttest?: GetContractTestRelations200ApplicationJsonContracttest[];
}


export class GetContractTestRelationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContractTestRelationsPathParams;
}


export class GetContractTestRelationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getContractTestRelations200ApplicationJsonObject?: GetContractTestRelations200ApplicationJson;
}
