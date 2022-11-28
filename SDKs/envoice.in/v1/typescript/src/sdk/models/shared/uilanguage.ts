import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UiLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=UiCulture" })
  uiCulture?: string;
}
