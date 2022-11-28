import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StateModelGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=by" })
  by?: string;

  @SpeakeasyMetadata({ data: "json, name=since" })
  since?: Date;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: boolean;
}
