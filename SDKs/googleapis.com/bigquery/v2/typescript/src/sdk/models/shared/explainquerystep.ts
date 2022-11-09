import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExplainQueryStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=substeps" })
  substeps?: string[];
}
