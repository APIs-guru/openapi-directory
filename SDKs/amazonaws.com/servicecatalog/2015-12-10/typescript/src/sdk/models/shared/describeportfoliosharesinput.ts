import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DescribePortfolioShareTypeEnum } from "./describeportfoliosharetypeenum";


export class DescribePortfolioSharesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=PortfolioId" })
  portfolioId: string;

  @Metadata({ data: "json, name=Type" })
  type: DescribePortfolioShareTypeEnum;
}
