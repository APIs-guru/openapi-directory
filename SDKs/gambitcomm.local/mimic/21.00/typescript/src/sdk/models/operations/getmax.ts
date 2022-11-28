import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMaxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMax200ApplicationJsonInt32Integer?: number;
}
