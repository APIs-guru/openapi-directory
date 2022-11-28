import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This data type is used as a response element to <code>DescribeDBLogFiles</code>.
**/
export declare class DescribeDbLogFilesDetails extends SpeakeasyBase {
    lastWritten?: number;
    logFileName?: string;
    size?: number;
}
