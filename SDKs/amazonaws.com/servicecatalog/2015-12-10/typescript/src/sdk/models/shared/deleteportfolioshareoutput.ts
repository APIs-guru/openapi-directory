import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePortfolioShareOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PortfolioShareToken" })
  portfolioShareToken?: string;
}
