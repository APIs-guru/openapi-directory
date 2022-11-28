import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScanfordevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clear_results" })
  clearResults: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout: number;
}
