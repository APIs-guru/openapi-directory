import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchitectureEnum } from "./architectureenum";


// SourceConfig
/** 
 * Information about a source configuration.
**/
export class SourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: ArchitectureEnum;

  @Metadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=s3Key" })
  s3Key?: string;
}
