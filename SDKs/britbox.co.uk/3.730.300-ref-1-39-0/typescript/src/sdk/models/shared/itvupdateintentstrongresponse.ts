import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvUpdateIntentStrongResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=intentId" })
  intentId?: string;

  @Metadata({ data: "json, name=intentType" })
  intentType?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
