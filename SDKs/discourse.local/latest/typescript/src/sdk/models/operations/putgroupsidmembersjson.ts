import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutGroupsIdMembersJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutGroupsIdMembersJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutGroupsIdMembersJsonPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutGroupsIdMembersJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putGroupsIdMembersJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
