import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamDescription } from "./streamdescription";


// DescribeStreamOutput
/** 
 * Represents the output of a <code>DescribeStream</code> operation.
**/
export class DescribeStreamOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamDescription" })
  streamDescription?: StreamDescription;
}
