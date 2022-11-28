import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGroupsIdMembersJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteGroupsIdMembersJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGroupsIdMembersJsonPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class DeleteGroupsIdMembersJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteGroupsIdMembersJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
