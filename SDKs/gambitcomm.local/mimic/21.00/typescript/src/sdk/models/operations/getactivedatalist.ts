import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActiveDataListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getActiveDataList200ApplicationJsonInt32Integers?: number[];
}
