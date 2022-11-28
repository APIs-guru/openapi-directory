import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateProductWithPortfolioInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioId" })
  portfolioId: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=SourcePortfolioId" })
  sourcePortfolioId?: string;
}
