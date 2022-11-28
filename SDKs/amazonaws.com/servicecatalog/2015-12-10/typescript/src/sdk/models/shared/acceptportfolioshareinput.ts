import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortfolioShareTypeEnum } from "./portfoliosharetypeenum";



export class AcceptPortfolioShareInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioId" })
  portfolioId: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioShareType" })
  portfolioShareType?: PortfolioShareTypeEnum;
}
