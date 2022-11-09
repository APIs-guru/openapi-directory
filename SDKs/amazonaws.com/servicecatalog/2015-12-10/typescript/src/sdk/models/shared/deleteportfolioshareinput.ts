import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationNode } from "./organizationnode";


export class DeletePortfolioShareInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=OrganizationNode" })
  organizationNode?: OrganizationNode;

  @Metadata({ data: "json, name=PortfolioId" })
  portfolioId: string;
}
