import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociatePrincipalFromPortfolioInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioId" })
  portfolioId: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalARN" })
  principalArn: string;
}
