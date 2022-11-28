import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortfolioShareTypeEnum } from "./portfoliosharetypeenum";



export class ListAcceptedPortfolioSharesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioShareType" })
  portfolioShareType?: PortfolioShareTypeEnum;
}
