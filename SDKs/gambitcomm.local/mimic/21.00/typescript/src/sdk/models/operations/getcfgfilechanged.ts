import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCfgFileChangedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCfgFileChanged200ApplicationJsonObject?: Map<string, number>;
}
