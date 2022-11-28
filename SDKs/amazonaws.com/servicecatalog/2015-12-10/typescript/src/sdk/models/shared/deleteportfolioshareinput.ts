import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationNode } from "./organizationnode";



export class DeletePortfolioShareInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationNode" })
  organizationNode?: OrganizationNode;

  @SpeakeasyMetadata({ data: "json, name=PortfolioId" })
  portfolioId: string;
}
