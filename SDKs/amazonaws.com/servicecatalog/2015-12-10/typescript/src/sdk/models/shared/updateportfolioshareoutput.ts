import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShareStatusEnum } from "./sharestatusenum";



export class UpdatePortfolioShareOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PortfolioShareToken" })
  portfolioShareToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ShareStatusEnum;
}
