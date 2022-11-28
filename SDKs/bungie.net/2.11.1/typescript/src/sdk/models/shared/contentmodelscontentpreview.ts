import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentModelsContentPreview extends SpeakeasyBase {
  @SpeakeasyMetadata()
  itemInSet?: boolean;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  path?: string;

  @SpeakeasyMetadata()
  setNesting?: number;

  @SpeakeasyMetadata()
  setTag?: string;

  @SpeakeasyMetadata()
  useSetId?: number;
}
