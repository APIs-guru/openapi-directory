import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3ConfigCreateRequest
/** 
 * Request model for creating a S3 configuration
**/
export class S3ConfigCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKey" })
  accessKey: string;

  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketUrl" })
  bucketUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointUrl" })
  endpointUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=secretKey" })
  secretKey: string;
}
