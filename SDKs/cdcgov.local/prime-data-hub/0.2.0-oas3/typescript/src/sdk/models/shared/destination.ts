import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemCount" })
  itemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=sending_at" })
  sendingAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}
