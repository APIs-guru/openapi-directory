import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostBulkmd5Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
