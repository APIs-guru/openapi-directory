import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateProductFromPortfolioInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=PortfolioId" })
  portfolioId: string;

  @Metadata({ data: "json, name=ProductId" })
  productId: string;
}
