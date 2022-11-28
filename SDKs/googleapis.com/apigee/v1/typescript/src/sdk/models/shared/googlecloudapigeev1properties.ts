import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Property } from "./googlecloudapigeev1property";



// GoogleCloudApigeeV1Properties
/** 
 * Message for compatibility with legacy Edge specification for Java Properties object in JSON.
**/
export class GoogleCloudApigeeV1Properties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=property", elemType: GoogleCloudApigeeV1Property })
  property?: GoogleCloudApigeeV1Property[];
}
