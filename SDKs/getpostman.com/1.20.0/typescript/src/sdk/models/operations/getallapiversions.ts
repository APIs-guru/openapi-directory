import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAllApiVersionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class GetAllApiVersions200ApplicationJsonVersions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetAllApiVersions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=versions", elemType: GetAllApiVersions200ApplicationJsonVersions })
  versions?: GetAllApiVersions200ApplicationJsonVersions[];
}


export class GetAllApiVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllApiVersionsPathParams;
}


export class GetAllApiVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllApiVersions200ApplicationJsonObject?: GetAllApiVersions200ApplicationJson;
}
