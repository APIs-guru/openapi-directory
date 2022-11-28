import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigUserTheme extends SpeakeasyBase {
  @SpeakeasyMetadata()
  userThemeDescription?: string;

  @SpeakeasyMetadata()
  userThemeId?: number;

  @SpeakeasyMetadata()
  userThemeName?: string;
}
