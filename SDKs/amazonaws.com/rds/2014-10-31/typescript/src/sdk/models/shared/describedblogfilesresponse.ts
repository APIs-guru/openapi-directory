import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribeDbLogFilesDetails } from "./describedblogfilesdetails";



// DescribeDbLogFilesResponse
/** 
 *  The response from a call to <code>DescribeDBLogFiles</code>. 
**/
export class DescribeDbLogFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DescribeDbLogFilesDetails })
  describeDbLogFiles?: DescribeDbLogFilesDetails[];

  @SpeakeasyMetadata()
  marker?: string;
}
