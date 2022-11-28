import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartnerIntegrationInfo } from "./partnerintegrationinfo";



export class DescribePartnersOutputMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PartnerIntegrationInfo })
  partnerIntegrationInfoList?: PartnerIntegrationInfo[];
}
