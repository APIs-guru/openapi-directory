import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkSettings } from "./networksettings";
import { TrafficSplit } from "./trafficsplit";


// Service
/** 
 * A Service resource is a logical component of an application that can share state and communicate in a secure fashion with other services. For example, an application that handles customer requests might include separate services to handle tasks such as backend data analysis or API requests from mobile devices. Each service has a collection of versions that define a specific set of code used to implement the functionality of that service.
**/
export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkSettings" })
  networkSettings?: NetworkSettings;

  @Metadata({ data: "json, name=split" })
  split?: TrafficSplit;
}
