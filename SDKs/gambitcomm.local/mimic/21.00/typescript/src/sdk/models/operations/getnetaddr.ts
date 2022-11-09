import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetaddrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetaddr200ApplicationJsonObject?: Map<string, number>;
}
