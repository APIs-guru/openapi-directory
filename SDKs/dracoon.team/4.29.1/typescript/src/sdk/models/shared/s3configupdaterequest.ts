import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3ConfigUpdateRequest
/** 
 * Request model for updating a S3 configuration
**/
export class S3ConfigUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKey" })
  accessKey?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketUrl" })
  bucketUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointUrl" })
  endpointUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=secretKey" })
  secretKey?: string;
}
