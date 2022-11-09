import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShareStatusEnum } from "./sharestatusenum";


export class UpdatePortfolioShareOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PortfolioShareToken" })
  portfolioShareToken?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ShareStatusEnum;
}
