import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutGroupsIdMembersJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutGroupsIdMembersJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutGroupsIdMembersJsonPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutGroupsIdMembersJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putGroupsIdMembersJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
