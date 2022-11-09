import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateExpirationForHitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExpireAt" })
  expireAt: Date;

  @Metadata({ data: "json, name=HITId" })
  hitId: string;
}
