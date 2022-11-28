import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCfgfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCfgfile200ApplicationJsonObject?: Map<string, number>;
}
