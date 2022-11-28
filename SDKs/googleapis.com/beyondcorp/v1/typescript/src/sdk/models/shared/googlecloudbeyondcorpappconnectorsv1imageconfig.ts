import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudBeyondcorpAppconnectorsV1ImageConfig
/** 
 * ImageConfig defines the control plane images to run.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1ImageConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stableImage" })
  stableImage?: string;

  @SpeakeasyMetadata({ data: "json, name=targetImage" })
  targetImage?: string;
}
