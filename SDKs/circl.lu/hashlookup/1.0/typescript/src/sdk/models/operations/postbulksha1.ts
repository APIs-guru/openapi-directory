import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostBulksha1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
