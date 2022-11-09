import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Volume
/** 
 * Volumes mounted within the app container. Only applicable in the App Engine flexible environment.
**/
export class Volume extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sizeGb" })
  sizeGb?: number;

  @Metadata({ data: "json, name=volumeType" })
  volumeType?: string;
}
