import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortfolioDetail } from "./portfoliodetail";
import { Tag } from "./tag";



export class UpdatePortfolioOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PortfolioDetail" })
  portfolioDetail?: PortfolioDetail;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
