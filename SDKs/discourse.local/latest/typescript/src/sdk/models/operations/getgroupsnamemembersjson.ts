import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGroupsNameMembersJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetGroupsNameMembersJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupsNameMembersJsonPathParams;
}


export class GetGroupsNameMembersJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getGroupsNameMembersJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
