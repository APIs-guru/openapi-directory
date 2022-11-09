import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubmitBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
