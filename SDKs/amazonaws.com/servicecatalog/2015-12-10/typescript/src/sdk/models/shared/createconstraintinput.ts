import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateConstraintInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioId" })
  portfolioId: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}
