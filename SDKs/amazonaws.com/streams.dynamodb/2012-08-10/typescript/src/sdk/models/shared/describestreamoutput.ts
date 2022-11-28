import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamDescription } from "./streamdescription";



// DescribeStreamOutput
/** 
 * Represents the output of a <code>DescribeStream</code> operation.
**/
export class DescribeStreamOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamDescription" })
  streamDescription?: StreamDescription;
}
