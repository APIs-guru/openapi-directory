import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGroupsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getGroupsJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
