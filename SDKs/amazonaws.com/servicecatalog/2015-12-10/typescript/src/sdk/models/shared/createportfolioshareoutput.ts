import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePortfolioShareOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PortfolioShareToken" })
  portfolioShareToken?: string;
}
