import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortalSummary } from "./portalsummary";



export class ListPortalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=portalSummaries", elemType: PortalSummary })
  portalSummaries?: PortalSummary[];
}
