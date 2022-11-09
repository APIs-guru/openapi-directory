import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class UpdateProductInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=AddTags", elemType: shared.Tag })
  addTags?: Tag[];

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Distributor" })
  distributor?: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=RemoveTags" })
  removeTags?: string[];

  @Metadata({ data: "json, name=SupportDescription" })
  supportDescription?: string;

  @Metadata({ data: "json, name=SupportEmail" })
  supportEmail?: string;

  @Metadata({ data: "json, name=SupportUrl" })
  supportUrl?: string;
}
