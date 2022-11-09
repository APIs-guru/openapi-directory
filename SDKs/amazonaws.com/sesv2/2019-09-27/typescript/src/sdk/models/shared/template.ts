import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Template
/** 
 * An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send.
**/
export class Template extends SpeakeasyBase {
  @Metadata({ data: "json, name=TemplateArn" })
  templateArn?: string;

  @Metadata({ data: "json, name=TemplateData" })
  templateData?: string;

  @Metadata({ data: "json, name=TemplateName" })
  templateName?: string;
}
