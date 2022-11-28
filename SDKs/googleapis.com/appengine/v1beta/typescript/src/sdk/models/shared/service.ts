import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkSettings } from "./networksettings";
import { TrafficSplit } from "./trafficsplit";



// Service
/** 
 * A Service resource is a logical component of an application that can share state and communicate in a secure fashion with other services. For example, an application that handles customer requests might include separate services to handle tasks such as backend data analysis or API requests from mobile devices. Each service has a collection of versions that define a specific set of code used to implement the functionality of that service.
**/
export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkSettings" })
  networkSettings?: NetworkSettings;

  @SpeakeasyMetadata({ data: "json, name=split" })
  split?: TrafficSplit;
}
