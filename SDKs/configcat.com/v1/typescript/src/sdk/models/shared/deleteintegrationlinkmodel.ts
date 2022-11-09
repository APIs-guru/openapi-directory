import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteIntegrationLinkModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasRemainingIntegrationLink" })
  hasRemainingIntegrationLink?: boolean;
}
