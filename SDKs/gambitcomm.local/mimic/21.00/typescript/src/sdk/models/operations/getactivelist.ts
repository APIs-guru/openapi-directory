import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActiveListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getActiveList200ApplicationJsonInt32Integers?: number[];
}
