import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayerSessionEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=at" })
  at?: number;

  @Metadata({ data: "json, name=emittedAt" })
  emittedAt?: Date;

  @Metadata({ data: "json, name=from" })
  from?: number;

  @Metadata({ data: "json, name=to" })
  to?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
