import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointAuthorization } from "./endpointauthorization";



export class EndpointAuthorizationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EndpointAuthorization })
  endpointAuthorizationList?: EndpointAuthorization[];

  @SpeakeasyMetadata()
  marker?: string;
}
