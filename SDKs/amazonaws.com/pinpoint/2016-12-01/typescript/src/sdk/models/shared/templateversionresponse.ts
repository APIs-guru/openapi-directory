import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TemplateVersionResponse
/** 
 * Provides information about a specific version of a message template.
**/
export class TemplateVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateName" })
  templateName: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateType" })
  templateType: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
