import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGroupsNameJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetGroupsNameJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupsNameJsonPathParams;
}


export class GetGroupsNameJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getGroupsNameJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
