import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CfgSaveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cfgSave200ApplicationJsonObject?: Map<string, number>;
}
