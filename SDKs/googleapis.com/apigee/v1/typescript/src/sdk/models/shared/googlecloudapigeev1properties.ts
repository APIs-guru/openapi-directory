import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Property } from "./googlecloudapigeev1property";


// GoogleCloudApigeeV1Properties
/** 
 * Message for compatibility with legacy Edge specification for Java Properties object in JSON.
**/
export class GoogleCloudApigeeV1Properties extends SpeakeasyBase {
  @Metadata({ data: "json, name=property", elemType: shared.GoogleCloudApigeeV1Property })
  property?: GoogleCloudApigeeV1Property[];
}
