import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointAccess } from "./endpointaccess";



export class EndpointAccessList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EndpointAccess })
  endpointAccessList?: EndpointAccess[];

  @SpeakeasyMetadata()
  marker?: string;
}
