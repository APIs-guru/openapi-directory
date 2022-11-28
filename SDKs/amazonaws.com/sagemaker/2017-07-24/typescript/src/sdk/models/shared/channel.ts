import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=ChannelName" })
  channelName: string;

  @SpeakeasyMetadata({ data: "json, name=CompressionType" })
  compressionType?: CompressionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ContentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource: DataSource;

  @SpeakeasyMetadata({ data: "json, name=InputMode" })
  inputMode?: TrainingInputModeEnum;

  @SpeakeasyMetadata({ data: "json, name=RecordWrapperType" })
  recordWrapperType?: RecordWrapperEnum;

  @SpeakeasyMetadata({ data: "json, name=ShuffleConfig" })
  shuffleConfig?: ShuffleConfig;
}
