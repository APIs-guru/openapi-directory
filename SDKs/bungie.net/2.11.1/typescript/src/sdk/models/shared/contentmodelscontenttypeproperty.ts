import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentModelsContentTypeDefaultValue } from "./contentmodelscontenttypedefaultvalue";



export class ContentModelsContentTypeProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributes?: Map<string, string>;

  @SpeakeasyMetadata()
  bindToProperty?: string;

  @SpeakeasyMetadata()
  boundRegex?: string;

  @SpeakeasyMetadata({ elemType: ContentModelsContentTypeProperty })
  childProperties?: ContentModelsContentTypeProperty[];

  @SpeakeasyMetadata()
  contentTypeAllowed?: string;

  @SpeakeasyMetadata()
  datatype?: number;

  @SpeakeasyMetadata({ elemType: ContentModelsContentTypeDefaultValue })
  defaultValues?: ContentModelsContentTypeDefaultValue[];

  @SpeakeasyMetadata()
  enabled?: boolean;

  @SpeakeasyMetadata()
  entitytype?: string;

  @SpeakeasyMetadata()
  fallback?: boolean;

  @SpeakeasyMetadata()
  isCombo?: boolean;

  @SpeakeasyMetadata()
  isExternalAllowed?: boolean;

  @SpeakeasyMetadata()
  isImage?: boolean;

  @SpeakeasyMetadata()
  isTitle?: boolean;

  @SpeakeasyMetadata()
  isVideo?: boolean;

  @SpeakeasyMetadata()
  legalContentTypes?: string[];

  @SpeakeasyMetadata()
  localizable?: boolean;

  @SpeakeasyMetadata()
  maxByteLength?: number;

  @SpeakeasyMetadata()
  maxFileSize?: number;

  @SpeakeasyMetadata()
  maxHeight?: number;

  @SpeakeasyMetadata()
  maxLength?: number;

  @SpeakeasyMetadata()
  maxWidth?: number;

  @SpeakeasyMetadata()
  minHeight?: number;

  @SpeakeasyMetadata()
  minWidth?: number;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  order?: number;

  @SpeakeasyMetadata()
  propertyDescription?: string;

  @SpeakeasyMetadata()
  propertySection?: string;

  @SpeakeasyMetadata()
  readableName?: string;

  @SpeakeasyMetadata()
  regexp?: string;

  @SpeakeasyMetadata()
  representationSelection?: Map<string, string>;

  @SpeakeasyMetadata()
  representationValidationString?: string;

  @SpeakeasyMetadata()
  required?: boolean;

  @SpeakeasyMetadata()
  rootPropertyName?: string;

  @SpeakeasyMetadata()
  rssAttribute?: string;

  @SpeakeasyMetadata()
  suppressProperty?: boolean;

  @SpeakeasyMetadata()
  validateAs?: string;

  @SpeakeasyMetadata()
  value?: string;

  @SpeakeasyMetadata()
  visible?: boolean;

  @SpeakeasyMetadata()
  visibleDependency?: string;

  @SpeakeasyMetadata()
  visibleOn?: string;

  @SpeakeasyMetadata()
  weight?: number;
}
