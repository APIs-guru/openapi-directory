import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkHeader } from "./networkheader";



// NetworkPathComponent
/** 
 * Information about a network path component.
**/
export class NetworkPathComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComponentId" })
  componentId?: string;

  @SpeakeasyMetadata({ data: "json, name=ComponentType" })
  componentType?: string;

  @SpeakeasyMetadata({ data: "json, name=Egress" })
  egress?: NetworkHeader;

  @SpeakeasyMetadata({ data: "json, name=Ingress" })
  ingress?: NetworkHeader;
}
