import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * A key-value pair associated with a CloudWatch resource.
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key: string;

  @SpeakeasyMetadata()
  value: string;
}
