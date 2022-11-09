import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListPortfolioAccessInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=OrganizationParentId" })
  organizationParentId?: string;

  @Metadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=PortfolioId" })
  portfolioId: string;
}
