import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionVolumesHostDetails
/** 
 * Information about a bind mount host volume.
**/
export class AwsEcsTaskDefinitionVolumesHostDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourcePath" })
  sourcePath?: string;
}
