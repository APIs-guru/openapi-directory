import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutGroupsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutGroupsIdJsonRequestBodyGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class PutGroupsIdJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=group" })
  group: PutGroupsIdJsonRequestBodyGroup;
}


export class PutGroupsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutGroupsIdJsonPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutGroupsIdJsonRequestBody;
}


export class PutGroupsIdJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: string;
}


export class PutGroupsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putGroupsIdJson200ApplicationJsonObject?: PutGroupsIdJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
