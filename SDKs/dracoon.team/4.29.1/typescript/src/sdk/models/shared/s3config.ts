import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Config
/** 
 * S3 configuration
**/
export class S3Config extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessKeyDefined" })
  accessKeyDefined: boolean;

  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=bucketUrl" })
  bucketUrl: string;

  @Metadata({ data: "json, name=endpointUrl" })
  endpointUrl?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=secretKeyDefined" })
  secretKeyDefined: boolean;
}
