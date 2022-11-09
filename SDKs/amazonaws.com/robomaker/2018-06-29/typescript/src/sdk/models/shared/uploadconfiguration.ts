import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UploadBehaviorEnum } from "./uploadbehaviorenum";


// UploadConfiguration
/** 
 * Provides upload configuration information. Files are uploaded from the simulation job to a location you specify. 
**/
export class UploadConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=uploadBehavior" })
  uploadBehavior: UploadBehaviorEnum;
}
