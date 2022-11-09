import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostCheckWaitlistStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
