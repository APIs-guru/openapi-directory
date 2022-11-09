import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkSettings } from "./networksettings";
import { TrafficSplit } from "./trafficsplit";
/**
 * A Service resource is a logical component of an application that can share state and communicate in a secure fashion with other services. For example, an application that handles customer requests might include separate services to handle tasks such as backend data analysis or API requests from mobile devices. Each service has a collection of versions that define a specific set of code used to implement the functionality of that service.
**/
export declare class Service extends SpeakeasyBase {
    id?: string;
    labels?: Map<string, string>;
    name?: string;
    networkSettings?: NetworkSettings;
    split?: TrafficSplit;
}
