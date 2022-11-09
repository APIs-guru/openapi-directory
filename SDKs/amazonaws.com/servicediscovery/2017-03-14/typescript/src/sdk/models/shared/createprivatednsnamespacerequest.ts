import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrivateDnsNamespaceProperties } from "./privatednsnamespaceproperties";
import { Tag } from "./tag";


export class CreatePrivateDnsNamespaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Properties" })
  properties?: PrivateDnsNamespaceProperties;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Vpc" })
  vpc: string;
}
