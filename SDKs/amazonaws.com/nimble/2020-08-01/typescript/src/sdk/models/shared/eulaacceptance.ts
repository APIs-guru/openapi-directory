import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EulaAcceptance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptedAt" })
  acceptedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=acceptedBy" })
  acceptedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=accepteeId" })
  accepteeId?: string;

  @SpeakeasyMetadata({ data: "json, name=eulaAcceptanceId" })
  eulaAcceptanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=eulaId" })
  eulaId?: string;
}
