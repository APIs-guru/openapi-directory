import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TemplateVersionResponse
/** 
 * Provides information about a specific version of a message template.
**/
export class TemplateVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @Metadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate: string;

  @Metadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @Metadata({ data: "json, name=TemplateName" })
  templateName: string;

  @Metadata({ data: "json, name=TemplateType" })
  templateType: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
