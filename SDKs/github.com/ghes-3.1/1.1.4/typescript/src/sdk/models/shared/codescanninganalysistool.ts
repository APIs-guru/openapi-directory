import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CodeScanningAnalysisTool extends SpeakeasyBase {
  @Metadata({ data: "json, name=guid" })
  guid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
