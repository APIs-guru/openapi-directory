import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmailTemplateMetadata
/** 
 * Contains information about an email template.
**/
export class EmailTemplateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=TemplateName" })
  templateName?: string;
}
