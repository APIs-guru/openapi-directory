import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig
/** 
 * ImageConfig defines the control plane images to run.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stableImage" })
  stableImage?: string;

  @SpeakeasyMetadata({ data: "json, name=targetImage" })
  targetImage?: string;
}
