import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostBulksha1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
