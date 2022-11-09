import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3ConfigUpdateRequest
/** 
 * Request model for updating a S3 configuration
**/
export class S3ConfigUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessKey" })
  accessKey?: string;

  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=bucketUrl" })
  bucketUrl?: string;

  @Metadata({ data: "json, name=endpointUrl" })
  endpointUrl?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=secretKey" })
  secretKey?: string;
}
