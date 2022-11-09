import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PortfolioDetail } from "./portfoliodetail";


export class ListAcceptedPortfolioSharesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=PortfolioDetails", elemType: shared.PortfolioDetail })
  portfolioDetails?: PortfolioDetail[];
}
