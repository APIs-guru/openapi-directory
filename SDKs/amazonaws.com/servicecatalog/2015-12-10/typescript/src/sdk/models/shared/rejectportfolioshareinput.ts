import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PortfolioShareTypeEnum } from "./portfoliosharetypeenum";


export class RejectPortfolioShareInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=PortfolioId" })
  portfolioId: string;

  @Metadata({ data: "json, name=PortfolioShareType" })
  portfolioShareType?: PortfolioShareTypeEnum;
}
