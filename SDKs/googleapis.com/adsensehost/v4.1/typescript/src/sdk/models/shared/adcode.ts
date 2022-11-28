import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adCode" })
  adCode?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
