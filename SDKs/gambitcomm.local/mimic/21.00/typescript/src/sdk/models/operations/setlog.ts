import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetLogRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: string;
}


export class SetLogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setLog200ApplicationJsonString?: string;
}
