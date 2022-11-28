import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Language } from "./language";



export class AppConfigI18n extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languages", elemType: Language })
  languages: Language[];
}
