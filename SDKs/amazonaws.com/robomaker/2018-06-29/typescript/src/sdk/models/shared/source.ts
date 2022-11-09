import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchitectureEnum } from "./architectureenum";


// Source
/** 
 * Information about a source.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: ArchitectureEnum;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=s3Key" })
  s3Key?: string;
}
