import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateConstraintInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters: string;

  @Metadata({ data: "json, name=PortfolioId" })
  portfolioId: string;

  @Metadata({ data: "json, name=ProductId" })
  productId: string;

  @Metadata({ data: "json, name=Type" })
  type: string;
}
