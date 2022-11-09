import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Verification extends SpeakeasyBase {
  @Metadata({ data: "json, name=payload" })
  payload: string;

  @Metadata({ data: "json, name=reason" })
  reason: string;

  @Metadata({ data: "json, name=signature" })
  signature: string;

  @Metadata({ data: "json, name=verified" })
  verified: boolean;
}
