import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociatePrincipalFromPortfolioInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=PortfolioId" })
  portfolioId: string;

  @Metadata({ data: "json, name=PrincipalARN" })
  principalArn: string;
}
