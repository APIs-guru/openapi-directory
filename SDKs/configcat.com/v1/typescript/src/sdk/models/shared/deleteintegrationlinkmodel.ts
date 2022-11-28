import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteIntegrationLinkModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasRemainingIntegrationLink" })
  hasRemainingIntegrationLink?: boolean;
}
