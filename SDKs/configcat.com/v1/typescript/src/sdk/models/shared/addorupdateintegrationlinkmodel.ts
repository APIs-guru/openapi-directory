import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddOrUpdateIntegrationLinkModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
