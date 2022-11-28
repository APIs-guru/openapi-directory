import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortfolioCompact } from "./portfoliocompact";
import { UserCompact } from "./usercompact";



export class PortfolioMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=portfolio" })
  portfolio?: PortfolioCompact;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserCompact;
}
