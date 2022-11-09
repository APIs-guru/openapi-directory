import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudWatchLoggingOptionUpdate } from "./cloudwatchloggingoptionupdate";
import { InputUpdate } from "./inputupdate";
import { OutputUpdate } from "./outputupdate";
import { ReferenceDataSourceUpdate } from "./referencedatasourceupdate";


// ApplicationUpdate
/** 
 * Describes updates to apply to an existing Amazon Kinesis Analytics application.
**/
export class ApplicationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationCodeUpdate" })
  applicationCodeUpdate?: string;

  @Metadata({ data: "json, name=CloudWatchLoggingOptionUpdates", elemType: shared.CloudWatchLoggingOptionUpdate })
  cloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];

  @Metadata({ data: "json, name=InputUpdates", elemType: shared.InputUpdate })
  inputUpdates?: InputUpdate[];

  @Metadata({ data: "json, name=OutputUpdates", elemType: shared.OutputUpdate })
  outputUpdates?: OutputUpdate[];

  @Metadata({ data: "json, name=ReferenceDataSourceUpdates", elemType: shared.ReferenceDataSourceUpdate })
  referenceDataSourceUpdates?: ReferenceDataSourceUpdate[];
}
