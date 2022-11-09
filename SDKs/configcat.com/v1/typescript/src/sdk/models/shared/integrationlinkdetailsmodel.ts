import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IntegrationLinkDetail } from "./integrationlinkdetail";


export class IntegrationLinkDetailsModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=allIntegrationLinkCount" })
  allIntegrationLinkCount?: number;

  @Metadata({ data: "json, name=details", elemType: shared.IntegrationLinkDetail })
  details?: IntegrationLinkDetail[];
}
