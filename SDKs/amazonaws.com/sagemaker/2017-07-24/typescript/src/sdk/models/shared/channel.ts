import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
import { DataSource } from "./datasource";
import { TrainingInputModeEnum } from "./traininginputmodeenum";
import { RecordWrapperEnum } from "./recordwrapperenum";
import { ShuffleConfig } from "./shuffleconfig";


// Channel
/** 
 * A channel is a named input source that training algorithms can consume. 
**/
export class Channel extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelName" })
  channelName: string;

  @Metadata({ data: "json, name=CompressionType" })
  compressionType?: CompressionTypeEnum;

  @Metadata({ data: "json, name=ContentType" })
  contentType?: string;

  @Metadata({ data: "json, name=DataSource" })
  dataSource: DataSource;

  @Metadata({ data: "json, name=InputMode" })
  inputMode?: TrainingInputModeEnum;

  @Metadata({ data: "json, name=RecordWrapperType" })
  recordWrapperType?: RecordWrapperEnum;

  @Metadata({ data: "json, name=ShuffleConfig" })
  shuffleConfig?: ShuffleConfig;
}
