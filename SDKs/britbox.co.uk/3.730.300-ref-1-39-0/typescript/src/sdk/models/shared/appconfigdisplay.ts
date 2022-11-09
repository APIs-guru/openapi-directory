import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Theme } from "./theme";


export class AppConfigDisplay extends SpeakeasyBase {
  @Metadata({ data: "json, name=themes", elemType: shared.Theme })
  themes: Theme[];
}
