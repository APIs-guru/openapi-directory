import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Volume
/** 
 * Volumes mounted within the app container. Only applicable in the App Engine flexible environment.
**/
export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeGb" })
  sizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=volumeType" })
  volumeType?: string;
}
