import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePortfolioShareOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PortfolioShareToken" })
  portfolioShareToken?: string;
}
