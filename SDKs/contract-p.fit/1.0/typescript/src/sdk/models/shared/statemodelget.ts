import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StateModelGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=by" })
  by?: string;

  @Metadata({ data: "json, name=since" })
  since?: Date;

  @Metadata({ data: "json, name=value" })
  value?: boolean;
}
