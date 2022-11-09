import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BuildInfo
/** 
 * Google Cloud Build information.
**/
export class BuildInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudBuildId" })
  cloudBuildId?: string;
}
