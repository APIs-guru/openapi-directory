import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
import { TransformDataSource } from "./transformdatasource";
import { SplitTypeEnum } from "./splittypeenum";



// TransformInput
/** 
 * Describes the input source of a transform job and the way the transform job consumes it.
**/
export class TransformInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompressionType" })
  compressionType?: CompressionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ContentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource: TransformDataSource;

  @SpeakeasyMetadata({ data: "json, name=SplitType" })
  splitType?: SplitTypeEnum;
}
