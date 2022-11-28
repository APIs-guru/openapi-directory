import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommonModelsCoreSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CommonModelsCoreSetting })
  childSettings?: CommonModelsCoreSetting[];

  @SpeakeasyMetadata()
  displayName?: string;

  @SpeakeasyMetadata()
  identifier?: string;

  @SpeakeasyMetadata()
  imagePath?: string;

  @SpeakeasyMetadata()
  isDefault?: boolean;

  @SpeakeasyMetadata()
  summary?: string;
}
