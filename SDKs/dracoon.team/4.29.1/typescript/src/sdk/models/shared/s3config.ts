import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Config
/** 
 * S3 configuration
**/
export class S3Config extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeyDefined" })
  accessKeyDefined: boolean;

  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketUrl" })
  bucketUrl: string;

  @SpeakeasyMetadata({ data: "json, name=endpointUrl" })
  endpointUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=secretKeyDefined" })
  secretKeyDefined: boolean;
}
