import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputParallelismUpdate } from "./inputparallelismupdate";
import { InputProcessingConfigurationUpdate } from "./inputprocessingconfigurationupdate";
import { InputSchemaUpdate } from "./inputschemaupdate";
import { KinesisFirehoseInputUpdate } from "./kinesisfirehoseinputupdate";
import { KinesisStreamsInputUpdate } from "./kinesisstreamsinputupdate";
/**
 * For a SQL-based Kinesis Data Analytics application, describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).
**/
export declare class InputUpdate extends SpeakeasyBase {
    inputId: string;
    inputParallelismUpdate?: InputParallelismUpdate;
    inputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;
    inputSchemaUpdate?: InputSchemaUpdate;
    kinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;
    kinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;
    namePrefixUpdate?: string;
}
