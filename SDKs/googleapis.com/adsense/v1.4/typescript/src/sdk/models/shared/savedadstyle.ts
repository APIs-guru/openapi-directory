import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdStyle } from "./adstyle";


export class SavedAdStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=adStyle" })
  adStyle?: AdStyle;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
