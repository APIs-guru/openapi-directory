import { SpeakeasyBase } from "../../../internal/utils";
import { DescribeDbLogFilesDetails } from "./describedblogfilesdetails";
export declare class DescribeDbLogFilesResponse extends SpeakeasyBase {
    describeDbLogFiles?: DescribeDbLogFilesDetails[];
    marker?: string;
}
