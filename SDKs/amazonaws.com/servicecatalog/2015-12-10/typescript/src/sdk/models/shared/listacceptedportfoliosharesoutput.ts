import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortfolioDetail } from "./portfoliodetail";



export class ListAcceptedPortfolioSharesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioDetails", elemType: PortfolioDetail })
  portfolioDetails?: PortfolioDetail[];
}
