import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EmojisGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  emojisGet200ApplicationJsonObject?: Map<string, string>;
}
