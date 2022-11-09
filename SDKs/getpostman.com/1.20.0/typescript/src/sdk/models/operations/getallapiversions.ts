import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAllApiVersionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class GetAllApiVersionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllApiVersionsPathParams;
}


export class GetAllApiVersions200ApplicationJsonVersions extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetAllApiVersions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=versions", elemType: operations.GetAllApiVersions200ApplicationJsonVersions })
  versions?: GetAllApiVersions200ApplicationJsonVersions[];
}


export class GetAllApiVersionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAllApiVersions200ApplicationJsonObject?: GetAllApiVersions200ApplicationJson;
}
