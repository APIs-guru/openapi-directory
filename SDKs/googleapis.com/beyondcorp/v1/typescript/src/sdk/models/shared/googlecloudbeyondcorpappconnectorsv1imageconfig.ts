import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudBeyondcorpAppconnectorsV1ImageConfig
/** 
 * ImageConfig defines the control plane images to run.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1ImageConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=stableImage" })
  stableImage?: string;

  @Metadata({ data: "json, name=targetImage" })
  targetImage?: string;
}
