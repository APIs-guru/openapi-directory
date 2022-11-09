import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmailTemplateMetadata
/** 
 * Contains information about an email template.
**/
export class EmailTemplateMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @Metadata({ data: "json, name=TemplateName" })
  templateName?: string;
}
