import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputParallelismUpdate } from "./inputparallelismupdate";
import { InputProcessingConfigurationUpdate } from "./inputprocessingconfigurationupdate";
import { InputSchemaUpdate } from "./inputschemaupdate";
import { KinesisFirehoseInputUpdate } from "./kinesisfirehoseinputupdate";
import { KinesisStreamsInputUpdate } from "./kinesisstreamsinputupdate";


// InputUpdate
/** 
 * For a SQL-based Kinesis Data Analytics application, describes updates to a specific input configuration (identified by the <code>InputId</code> of an application). 
**/
export class InputUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputId" })
  inputId: string;

  @Metadata({ data: "json, name=InputParallelismUpdate" })
  inputParallelismUpdate?: InputParallelismUpdate;

  @Metadata({ data: "json, name=InputProcessingConfigurationUpdate" })
  inputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;

  @Metadata({ data: "json, name=InputSchemaUpdate" })
  inputSchemaUpdate?: InputSchemaUpdate;

  @Metadata({ data: "json, name=KinesisFirehoseInputUpdate" })
  kinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;

  @Metadata({ data: "json, name=KinesisStreamsInputUpdate" })
  kinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;

  @Metadata({ data: "json, name=NamePrefixUpdate" })
  namePrefixUpdate?: string;
}
