import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BuildInfo
/** 
 * Google Cloud Build information.
**/
export class BuildInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudBuildId" })
  cloudBuildId?: string;
}
