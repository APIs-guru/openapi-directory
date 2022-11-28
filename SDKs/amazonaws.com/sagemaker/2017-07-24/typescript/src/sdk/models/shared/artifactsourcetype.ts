import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactSourceIdTypeEnum } from "./artifactsourceidtypeenum";



// ArtifactSourceType
/** 
 * The ID and ID type of an artifact source.
**/
export class ArtifactSourceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceIdType" })
  sourceIdType: ArtifactSourceIdTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
