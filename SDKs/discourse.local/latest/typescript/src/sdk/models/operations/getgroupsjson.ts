import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGroupsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getGroupsJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
