import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
import { AutoMlDataSource } from "./automldatasource";



// AutoMlChannel
/** 
 * A channel is a named input source that training algorithms can consume. For more information, see .
**/
export class AutoMlChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompressionType" })
  compressionType?: CompressionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource: AutoMlDataSource;

  @SpeakeasyMetadata({ data: "json, name=TargetAttributeName" })
  targetAttributeName: string;
}
