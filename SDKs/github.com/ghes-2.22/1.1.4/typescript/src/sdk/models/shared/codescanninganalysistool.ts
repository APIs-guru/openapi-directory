import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodeScanningAnalysisTool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guid" })
  guid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
