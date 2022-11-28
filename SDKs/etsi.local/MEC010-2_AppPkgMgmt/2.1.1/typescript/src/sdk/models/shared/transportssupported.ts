import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransportDescriptor } from "./transportdescriptor";



// TransportsSupported
/** 
 * 'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.'
**/
export class TransportsSupported extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serializers?: string[];

  @SpeakeasyMetadata()
  transport?: TransportDescriptor;
}
