import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLoggingOptionUpdate } from "./cloudwatchloggingoptionupdate";
import { InputUpdate } from "./inputupdate";
import { OutputUpdate } from "./outputupdate";
import { ReferenceDataSourceUpdate } from "./referencedatasourceupdate";
/**
 * Describes updates to apply to an existing Amazon Kinesis Analytics application.
**/
export declare class ApplicationUpdate extends SpeakeasyBase {
    applicationCodeUpdate?: string;
    cloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];
    inputUpdates?: InputUpdate[];
    outputUpdates?: OutputUpdate[];
    referenceDataSourceUpdates?: ReferenceDataSourceUpdate[];
}
