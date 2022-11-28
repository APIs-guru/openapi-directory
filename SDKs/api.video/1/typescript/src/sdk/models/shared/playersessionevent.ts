import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayerSessionEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=at" })
  at?: number;

  @SpeakeasyMetadata({ data: "json, name=emittedAt" })
  emittedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
