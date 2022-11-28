import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FlowDefinitionOutputConfig
/** 
 * Contains information about where human output will be stored.
**/
export class FlowDefinitionOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
