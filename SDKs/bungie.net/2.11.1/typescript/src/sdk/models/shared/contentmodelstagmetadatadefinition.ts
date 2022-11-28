import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentModelsTagMetadataItem } from "./contentmodelstagmetadataitem";



export class ContentModelsTagMetadataDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata()
  datatype?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  isRequired?: boolean;

  @SpeakeasyMetadata({ elemType: ContentModelsTagMetadataItem })
  items?: ContentModelsTagMetadataItem[];

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  order?: number;
}
