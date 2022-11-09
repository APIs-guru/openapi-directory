import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destination extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemCount" })
  itemCount?: number;

  @Metadata({ data: "json, name=organization" })
  organization?: string;

  @Metadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @Metadata({ data: "json, name=sending_at" })
  sendingAt?: Date;

  @Metadata({ data: "json, name=service" })
  service?: string;
}
