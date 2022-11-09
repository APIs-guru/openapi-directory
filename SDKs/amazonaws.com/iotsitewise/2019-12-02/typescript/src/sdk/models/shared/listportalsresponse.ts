import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PortalSummary } from "./portalsummary";


export class ListPortalsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=portalSummaries", elemType: shared.PortalSummary })
  portalSummaries?: PortalSummary[];
}
