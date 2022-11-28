import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePortfolioShareOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PortfolioShareToken" })
  portfolioShareToken?: string;
}
