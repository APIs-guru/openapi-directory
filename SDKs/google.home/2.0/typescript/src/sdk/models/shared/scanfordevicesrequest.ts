import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScanfordevicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clear_results" })
  clearResults: boolean;

  @Metadata({ data: "json, name=enable" })
  enable: boolean;

  @Metadata({ data: "json, name=timeout" })
  timeout: number;
}
