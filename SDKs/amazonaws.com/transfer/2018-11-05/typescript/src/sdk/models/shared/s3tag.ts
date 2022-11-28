import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Tag
/** 
 * Specifies the key-value pair that are assigned to a file during the execution of a Tagging step.
**/
export class S3Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
