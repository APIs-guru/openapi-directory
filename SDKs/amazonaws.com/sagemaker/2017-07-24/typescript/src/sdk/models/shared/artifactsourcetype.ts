import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactSourceIdTypeEnum } from "./artifactsourceidtypeenum";


// ArtifactSourceType
/** 
 * The ID and ID type of an artifact source.
**/
export class ArtifactSourceType extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourceIdType" })
  sourceIdType: ArtifactSourceIdTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
