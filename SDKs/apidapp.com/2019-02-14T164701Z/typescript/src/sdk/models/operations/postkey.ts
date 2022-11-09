import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
