import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribePortfolioShareTypeEnum } from "./describeportfoliosharetypeenum";



export class DescribePortfolioSharesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioId" })
  portfolioId: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: DescribePortfolioShareTypeEnum;
}
