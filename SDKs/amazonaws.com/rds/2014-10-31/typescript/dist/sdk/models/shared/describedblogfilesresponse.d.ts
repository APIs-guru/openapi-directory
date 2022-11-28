import { SpeakeasyBase } from "../../../internal/utils";
import { DescribeDbLogFilesDetails } from "./describedblogfilesdetails";
/**
 *  The response from a call to <code>DescribeDBLogFiles</code>.
**/
export declare class DescribeDbLogFilesResponse extends SpeakeasyBase {
    describeDbLogFiles?: DescribeDbLogFilesDetails[];
    marker?: string;
}
