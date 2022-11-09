import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSearchJsonRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class GetSearchJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSearchJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
