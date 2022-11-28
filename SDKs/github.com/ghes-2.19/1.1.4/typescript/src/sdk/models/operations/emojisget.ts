import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EmojisGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  emojisGet200ApplicationJsonObject?: Map<string, string>;
}
