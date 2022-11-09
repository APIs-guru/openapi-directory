import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGroupsNameMembersJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetGroupsNameMembersJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGroupsNameMembersJsonPathParams;
}


export class GetGroupsNameMembersJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getGroupsNameMembersJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
