import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Credentials
/** 
 * Amazon Web Services credentials for API authentication.
**/
export class Credentials extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessKeyId: string;

  @SpeakeasyMetadata()
  expiration: Date;

  @SpeakeasyMetadata()
  secretAccessKey: string;

  @SpeakeasyMetadata()
  sessionToken: string;
}
