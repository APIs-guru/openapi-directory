import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IntegrationLinkTypeEnum } from "./integrationlinktypeenum";


export class IntegrationLinkModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=integrationLinkType" })
  integrationLinkType?: IntegrationLinkTypeEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
