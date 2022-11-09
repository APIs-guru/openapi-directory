import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EulaAcceptance extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceptedAt" })
  acceptedAt?: Date;

  @Metadata({ data: "json, name=acceptedBy" })
  acceptedBy?: string;

  @Metadata({ data: "json, name=accepteeId" })
  accepteeId?: string;

  @Metadata({ data: "json, name=eulaAcceptanceId" })
  eulaAcceptanceId?: string;

  @Metadata({ data: "json, name=eulaId" })
  eulaId?: string;
}
