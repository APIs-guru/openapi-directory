import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutGroupsIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutGroupsIdJsonRequestBodyGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class PutGroupsIdJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group" })
  group: PutGroupsIdJsonRequestBodyGroup;
}


export class PutGroupsIdJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: string;
}


export class PutGroupsIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutGroupsIdJsonPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutGroupsIdJsonRequestBody;
}


export class PutGroupsIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putGroupsIdJson200ApplicationJsonObject?: PutGroupsIdJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
