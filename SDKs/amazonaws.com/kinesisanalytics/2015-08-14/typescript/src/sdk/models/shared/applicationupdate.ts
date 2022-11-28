import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptionUpdate } from "./cloudwatchloggingoptionupdate";
import { InputUpdate } from "./inputupdate";
import { OutputUpdate } from "./outputupdate";
import { ReferenceDataSourceUpdate } from "./referencedatasourceupdate";



// ApplicationUpdate
/** 
 * Describes updates to apply to an existing Amazon Kinesis Analytics application.
**/
export class ApplicationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationCodeUpdate" })
  applicationCodeUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptionUpdates", elemType: CloudWatchLoggingOptionUpdate })
  cloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];

  @SpeakeasyMetadata({ data: "json, name=InputUpdates", elemType: InputUpdate })
  inputUpdates?: InputUpdate[];

  @SpeakeasyMetadata({ data: "json, name=OutputUpdates", elemType: OutputUpdate })
  outputUpdates?: OutputUpdate[];

  @SpeakeasyMetadata({ data: "json, name=ReferenceDataSourceUpdates", elemType: ReferenceDataSourceUpdate })
  referenceDataSourceUpdates?: ReferenceDataSourceUpdate[];
}
