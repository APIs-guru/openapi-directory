import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLast200ApplicationJsonInt32Integer?: number;
}
