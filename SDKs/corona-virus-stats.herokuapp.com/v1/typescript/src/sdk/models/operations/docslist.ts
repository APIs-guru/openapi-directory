import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DocsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
