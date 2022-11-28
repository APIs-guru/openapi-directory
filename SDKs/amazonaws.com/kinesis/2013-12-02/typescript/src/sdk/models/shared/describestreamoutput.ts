import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamDescription } from "./streamdescription";



// DescribeStreamOutput
/** 
 * Represents the output for <code>DescribeStream</code>.
**/
export class DescribeStreamOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamDescription" })
  streamDescription: StreamDescription;
}
