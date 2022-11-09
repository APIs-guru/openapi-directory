import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class UpdatePortfolioInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=AddTags", elemType: shared.Tag })
  addTags?: Tag[];

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @Metadata({ data: "json, name=RemoveTags" })
  removeTags?: string[];
}
