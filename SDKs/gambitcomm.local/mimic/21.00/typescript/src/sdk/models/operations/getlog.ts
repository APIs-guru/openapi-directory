import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLog200ApplicationJsonObject?: Map<string, number>;
}
