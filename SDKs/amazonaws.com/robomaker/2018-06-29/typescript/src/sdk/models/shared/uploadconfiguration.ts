import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UploadBehaviorEnum } from "./uploadbehaviorenum";



// UploadConfiguration
/** 
 * Provides upload configuration information. Files are uploaded from the simulation job to a location you specify. 
**/
export class UploadConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=uploadBehavior" })
  uploadBehavior: UploadBehaviorEnum;
}
