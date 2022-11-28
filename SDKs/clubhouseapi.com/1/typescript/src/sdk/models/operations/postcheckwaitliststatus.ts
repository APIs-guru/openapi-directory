import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCheckWaitlistStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
