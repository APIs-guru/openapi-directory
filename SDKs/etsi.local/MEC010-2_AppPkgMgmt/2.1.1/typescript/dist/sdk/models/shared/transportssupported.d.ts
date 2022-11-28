import { SpeakeasyBase } from "../../../internal/utils";
import { TransportDescriptor } from "./transportdescriptor";
/**
 * 'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.'
**/
export declare class TransportsSupported extends SpeakeasyBase {
    serializers?: string[];
    transport?: TransportDescriptor;
}
