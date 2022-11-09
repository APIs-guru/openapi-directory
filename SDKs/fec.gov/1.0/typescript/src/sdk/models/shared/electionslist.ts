import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ElectionsList extends SpeakeasyBase {
  @Metadata({ data: "json, name=cycle" })
  cycle?: number;

  @Metadata({ data: "json, name=district" })
  district?: string;

  @Metadata({ data: "json, name=office" })
  office?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;
}
