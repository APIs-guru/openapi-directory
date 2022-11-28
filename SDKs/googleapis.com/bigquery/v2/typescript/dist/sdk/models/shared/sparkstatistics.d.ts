import { SpeakeasyBase } from "../../../internal/utils";
import { SparkLoggingInfo } from "./sparklogginginfo";
export declare class SparkStatistics extends SpeakeasyBase {
    endpoints?: Map<string, string>;
    loggingInfo?: SparkLoggingInfo;
    sparkJobId?: string;
    sparkJobLocation?: string;
}
