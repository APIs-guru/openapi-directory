import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResendEmailToVerifyUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
