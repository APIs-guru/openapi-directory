import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
import { AutoMlDataSource } from "./automldatasource";


// AutoMlChannel
/** 
 * A channel is a named input source that training algorithms can consume. For more information, see .
**/
export class AutoMlChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompressionType" })
  compressionType?: CompressionTypeEnum;

  @Metadata({ data: "json, name=DataSource" })
  dataSource: AutoMlDataSource;

  @Metadata({ data: "json, name=TargetAttributeName" })
  targetAttributeName: string;
}
