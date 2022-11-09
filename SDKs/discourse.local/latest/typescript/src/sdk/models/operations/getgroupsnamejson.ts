import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGroupsNameJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetGroupsNameJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGroupsNameJsonPathParams;
}


export class GetGroupsNameJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getGroupsNameJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
