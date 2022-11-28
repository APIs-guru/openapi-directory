import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentModelsContentTypePropertySection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collapsed?: boolean;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  readableName?: string;
}
