import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteGroupsIdMembersJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteGroupsIdMembersJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteGroupsIdMembersJsonPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class DeleteGroupsIdMembersJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteGroupsIdMembersJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
