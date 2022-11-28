import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentModelsTagMetadataItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  groups?: string[];

  @SpeakeasyMetadata()
  isDefault?: boolean;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  tagText?: string;
}
