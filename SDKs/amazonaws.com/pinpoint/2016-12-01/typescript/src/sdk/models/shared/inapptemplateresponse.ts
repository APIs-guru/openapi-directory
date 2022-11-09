import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InAppMessageContent } from "./inappmessagecontent";
import { LayoutEnum } from "./layoutenum";
import { TemplateTypeEnum } from "./templatetypeenum";


// InAppTemplateResponse
/** 
 * In-App Template Response.
**/
export class InAppTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Content", elemType: shared.InAppMessageContent })
  content?: InAppMessageContent[];

  @Metadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @Metadata({ data: "json, name=CustomConfig" })
  customConfig?: Map<string, string>;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate: string;

  @Metadata({ data: "json, name=Layout" })
  layout?: LayoutEnum;

  @Metadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @Metadata({ data: "json, name=TemplateName" })
  templateName: string;

  @Metadata({ data: "json, name=TemplateType" })
  templateType: TemplateTypeEnum;

  @Metadata({ data: "json, name=Version" })
  version?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
