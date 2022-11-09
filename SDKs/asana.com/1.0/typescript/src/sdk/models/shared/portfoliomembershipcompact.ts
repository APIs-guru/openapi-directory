import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PortfolioCompact } from "./portfoliocompact";
import { UserCompact } from "./usercompact";


export class PortfolioMembershipCompact extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=portfolio" })
  portfolio?: PortfolioCompact;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=user" })
  user?: UserCompact;
}
