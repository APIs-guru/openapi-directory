import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=adCode" })
  adCode?: string;

  @Metadata({ data: "json, name=ampBody" })
  ampBody?: string;

  @Metadata({ data: "json, name=ampHead" })
  ampHead?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
