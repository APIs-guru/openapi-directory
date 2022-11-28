import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntegrationLinkTypeEnum } from "./integrationlinktypeenum";



export class IntegrationLinkModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=integrationLinkType" })
  integrationLinkType?: IntegrationLinkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
