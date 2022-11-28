import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePortfolioShareStatusInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PortfolioShareToken" })
  portfolioShareToken: string;
}
