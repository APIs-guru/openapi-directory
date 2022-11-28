import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeDbLogFilesDetails
/** 
 * This data type is used as a response element to <code>DescribeDBLogFiles</code>.
**/
export class DescribeDbLogFilesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  lastWritten?: number;

  @SpeakeasyMetadata()
  logFileName?: string;

  @SpeakeasyMetadata()
  size?: number;
}
