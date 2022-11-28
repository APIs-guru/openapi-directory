import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortfolioShareDetail } from "./portfoliosharedetail";



export class DescribePortfolioSharesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioShareDetails", elemType: PortfolioShareDetail })
  portfolioShareDetails?: PortfolioShareDetail[];
}
