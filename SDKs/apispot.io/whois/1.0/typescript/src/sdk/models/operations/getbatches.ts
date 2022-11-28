import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBatchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arrayOfBatch?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
