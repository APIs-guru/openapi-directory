import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCfgfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getCfgfile200ApplicationJsonObject?: Map<string, number>;
}
