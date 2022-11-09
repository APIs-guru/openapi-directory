import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
import { TransformDataSource } from "./transformdatasource";
import { SplitTypeEnum } from "./splittypeenum";


// TransformInput
/** 
 * Describes the input source of a transform job and the way the transform job consumes it.
**/
export class TransformInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompressionType" })
  compressionType?: CompressionTypeEnum;

  @Metadata({ data: "json, name=ContentType" })
  contentType?: string;

  @Metadata({ data: "json, name=DataSource" })
  dataSource: TransformDataSource;

  @Metadata({ data: "json, name=SplitType" })
  splitType?: SplitTypeEnum;
}
