import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationNodeTypeEnum } from "./organizationnodetypeenum";


export class ListOrganizationPortfolioAccessInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=OrganizationNodeType" })
  organizationNodeType: OrganizationNodeTypeEnum;

  @Metadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=PortfolioId" })
  portfolioId: string;
}
