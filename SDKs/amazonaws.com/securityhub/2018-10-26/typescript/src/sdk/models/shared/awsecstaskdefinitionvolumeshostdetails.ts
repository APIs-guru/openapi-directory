import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionVolumesHostDetails
/** 
 * Information about a bind mount host volume.
**/
export class AwsEcsTaskDefinitionVolumesHostDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourcePath" })
  sourcePath?: string;
}
