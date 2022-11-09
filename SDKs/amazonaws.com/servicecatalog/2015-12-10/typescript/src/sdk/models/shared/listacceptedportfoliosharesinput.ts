import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PortfolioShareTypeEnum } from "./portfoliosharetypeenum";


export class ListAcceptedPortfolioSharesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=PortfolioShareType" })
  portfolioShareType?: PortfolioShareTypeEnum;
}
