import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PortfolioShareDetail } from "./portfoliosharedetail";


export class DescribePortfolioSharesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=PortfolioShareDetails", elemType: shared.PortfolioShareDetail })
  portfolioShareDetails?: PortfolioShareDetail[];
}
