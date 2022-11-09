import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkHeader } from "./networkheader";
import { NetworkHeader } from "./networkheader";


// NetworkPathComponent
/** 
 * Information about a network path component.
**/
export class NetworkPathComponent extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComponentId" })
  componentId?: string;

  @Metadata({ data: "json, name=ComponentType" })
  componentType?: string;

  @Metadata({ data: "json, name=Egress" })
  egress?: NetworkHeader;

  @Metadata({ data: "json, name=Ingress" })
  ingress?: NetworkHeader;
}
