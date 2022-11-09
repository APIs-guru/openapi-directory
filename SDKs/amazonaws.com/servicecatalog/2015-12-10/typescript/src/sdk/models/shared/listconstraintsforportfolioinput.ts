import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListConstraintsForPortfolioInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=PortfolioId" })
  portfolioId: string;

  @Metadata({ data: "json, name=ProductId" })
  productId?: string;
}
