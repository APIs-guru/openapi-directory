import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Tag
/** 
 * Specifies the key-value pair that are assigned to a file during the execution of a Tagging step.
**/
export class S3Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
