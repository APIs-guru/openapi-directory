import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class UpdateProductInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=AddTags", elemType: Tag })
  addTags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Distributor" })
  distributor?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=RemoveTags" })
  removeTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=SupportDescription" })
  supportDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportEmail" })
  supportEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportUrl" })
  supportUrl?: string;
}
