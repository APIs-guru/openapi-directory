import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExplainQueryStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=substeps" })
  substeps?: string[];
}
