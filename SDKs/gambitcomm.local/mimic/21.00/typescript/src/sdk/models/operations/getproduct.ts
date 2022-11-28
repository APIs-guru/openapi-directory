import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProduct200ApplicationJsonObject?: Map<string, number>;
}
