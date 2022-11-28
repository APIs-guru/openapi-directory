import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdStyle } from "./adstyle";



export class SavedAdStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adStyle" })
  adStyle?: AdStyle;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
