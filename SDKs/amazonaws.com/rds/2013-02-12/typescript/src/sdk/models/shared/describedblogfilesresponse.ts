import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribeDbLogFilesDetails } from "./describedblogfilesdetails";



export class DescribeDbLogFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DescribeDbLogFilesDetails })
  describeDbLogFiles?: DescribeDbLogFilesDetails[];

  @SpeakeasyMetadata()
  marker?: string;
}
