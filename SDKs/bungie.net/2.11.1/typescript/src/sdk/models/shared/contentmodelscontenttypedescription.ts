import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentModelsContentPreview } from "./contentmodelscontentpreview";
import { ContentModelsContentTypeProperty } from "./contentmodelscontenttypeproperty";
import { ContentModelsContentTypePropertySection } from "./contentmodelscontenttypepropertysection";
import { ContentModelsTagMetadataDefinition } from "./contentmodelstagmetadatadefinition";
import { ContentModelsTagMetadataItem } from "./contentmodelstagmetadataitem";



export class ContentModelsContentTypeDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowComments?: boolean;

  @SpeakeasyMetadata()
  autoEnglishPropertyFallback?: boolean;

  @SpeakeasyMetadata()
  bindIdentifierToProperty?: string;

  @SpeakeasyMetadata()
  boundRegex?: string;

  @SpeakeasyMetadata()
  bulkUploadable?: boolean;

  @SpeakeasyMetadata()
  cType?: string;

  @SpeakeasyMetadata()
  contentDescription?: string;

  @SpeakeasyMetadata()
  forceIdentifierBinding?: boolean;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  previewImage?: string;

  @SpeakeasyMetadata({ elemType: ContentModelsContentPreview })
  previews?: ContentModelsContentPreview[];

  @SpeakeasyMetadata()
  priority?: number;

  @SpeakeasyMetadata({ elemType: ContentModelsContentTypeProperty })
  properties?: ContentModelsContentTypeProperty[];

  @SpeakeasyMetadata({ elemType: ContentModelsContentTypePropertySection })
  propertySections?: ContentModelsContentTypePropertySection[];

  @SpeakeasyMetadata()
  reminder?: string;

  @SpeakeasyMetadata()
  showInContentEditor?: boolean;

  @SpeakeasyMetadata()
  suppressCmsPath?: boolean;

  @SpeakeasyMetadata({ elemType: ContentModelsTagMetadataDefinition })
  tagMetadata?: ContentModelsTagMetadataDefinition[];

  @SpeakeasyMetadata({ elemType: ContentModelsTagMetadataItem })
  tagMetadataItems?: Map<string, ContentModelsTagMetadataItem>;

  @SpeakeasyMetadata()
  typeOf?: string;

  @SpeakeasyMetadata()
  usageExamples?: string[];
}
