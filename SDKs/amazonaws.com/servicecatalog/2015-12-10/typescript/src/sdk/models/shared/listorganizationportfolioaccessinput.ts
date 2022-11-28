import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationNodeTypeEnum } from "./organizationnodetypeenum";



export class ListOrganizationPortfolioAccessInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationNodeType" })
  organizationNodeType: OrganizationNodeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioId" })
  portfolioId: string;
}
