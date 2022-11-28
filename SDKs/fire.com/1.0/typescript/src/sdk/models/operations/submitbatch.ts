import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubmitBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
