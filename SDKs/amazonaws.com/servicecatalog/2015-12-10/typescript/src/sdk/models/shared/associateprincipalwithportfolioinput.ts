import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";


export class AssociatePrincipalWithPortfolioInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=PortfolioId" })
  portfolioId: string;

  @Metadata({ data: "json, name=PrincipalARN" })
  principalArn: string;

  @Metadata({ data: "json, name=PrincipalType" })
  principalType: PrincipalTypeEnum;
}
