import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateExpirationForHitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpireAt" })
  expireAt: Date;

  @SpeakeasyMetadata({ data: "json, name=HITId" })
  hitId: string;
}
