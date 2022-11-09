import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FlowDefinitionOutputConfig
/** 
 * Contains information about where human output will be stored.
**/
export class FlowDefinitionOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
