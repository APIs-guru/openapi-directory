import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBatchesResponse extends SpeakeasyBase {
  @Metadata()
  arrayOfBatch?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
