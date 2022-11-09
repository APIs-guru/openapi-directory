import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamDescription } from "./streamdescription";


// DescribeStreamOutput
/** 
 * Represents the output for <code>DescribeStream</code>.
**/
export class DescribeStreamOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamDescription" })
  streamDescription: StreamDescription;
}
