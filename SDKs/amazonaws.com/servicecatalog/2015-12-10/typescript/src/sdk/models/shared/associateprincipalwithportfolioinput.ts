import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";



export class AssociatePrincipalWithPortfolioInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioId" })
  portfolioId: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalARN" })
  principalArn: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalType" })
  principalType: PrincipalTypeEnum;
}
