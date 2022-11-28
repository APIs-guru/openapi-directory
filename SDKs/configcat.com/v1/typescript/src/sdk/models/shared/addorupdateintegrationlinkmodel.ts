import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddOrUpdateIntegrationLinkModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
