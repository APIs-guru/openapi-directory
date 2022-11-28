import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PartnerIntegrationOutputMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  databaseName?: string;

  @SpeakeasyMetadata()
  partnerName?: string;
}
