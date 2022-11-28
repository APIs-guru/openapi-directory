import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReturnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getReturn200ApplicationJsonObject?: Map<string, number>;
}
