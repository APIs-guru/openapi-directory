import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntegrationLinkDetail } from "./integrationlinkdetail";



export class IntegrationLinkDetailsModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allIntegrationLinkCount" })
  allIntegrationLinkCount?: number;

  @SpeakeasyMetadata({ data: "json, name=details", elemType: IntegrationLinkDetail })
  details?: IntegrationLinkDetail[];
}
