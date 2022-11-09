import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TrapDest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IP" })
  ip?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;
}
