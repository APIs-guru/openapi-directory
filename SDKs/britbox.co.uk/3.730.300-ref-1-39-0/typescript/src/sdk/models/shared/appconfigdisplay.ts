import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Theme } from "./theme";



export class AppConfigDisplay extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=themes", elemType: Theme })
  themes: Theme[];
}
