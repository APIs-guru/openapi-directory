import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputParallelismUpdate } from "./inputparallelismupdate";
import { InputProcessingConfigurationUpdate } from "./inputprocessingconfigurationupdate";
import { InputSchemaUpdate } from "./inputschemaupdate";
import { KinesisFirehoseInputUpdate } from "./kinesisfirehoseinputupdate";
import { KinesisStreamsInputUpdate } from "./kinesisstreamsinputupdate";



// InputUpdate
/** 
 * Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application). 
**/
export class InputUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputId" })
  inputId: string;

  @SpeakeasyMetadata({ data: "json, name=InputParallelismUpdate" })
  inputParallelismUpdate?: InputParallelismUpdate;

  @SpeakeasyMetadata({ data: "json, name=InputProcessingConfigurationUpdate" })
  inputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;

  @SpeakeasyMetadata({ data: "json, name=InputSchemaUpdate" })
  inputSchemaUpdate?: InputSchemaUpdate;

  @SpeakeasyMetadata({ data: "json, name=KinesisFirehoseInputUpdate" })
  kinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;

  @SpeakeasyMetadata({ data: "json, name=KinesisStreamsInputUpdate" })
  kinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;

  @SpeakeasyMetadata({ data: "json, name=NamePrefixUpdate" })
  namePrefixUpdate?: string;
}
