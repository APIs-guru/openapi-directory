import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrivateDnsNamespaceProperties } from "./privatednsnamespaceproperties";
import { Tag } from "./tag";



export class CreatePrivateDnsNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: PrivateDnsNamespaceProperties;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Vpc" })
  vpc: string;
}
