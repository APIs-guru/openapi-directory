import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCfgFileChangedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getCfgFileChanged200ApplicationJsonObject?: Map<string, number>;
}
