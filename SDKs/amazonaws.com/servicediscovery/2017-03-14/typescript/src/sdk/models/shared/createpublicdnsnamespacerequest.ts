import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicDnsNamespaceProperties } from "./publicdnsnamespaceproperties";
import { Tag } from "./tag";



export class CreatePublicDnsNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: PublicDnsNamespaceProperties;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
