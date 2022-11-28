import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostBulkmd5Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
