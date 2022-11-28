import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemplateTypeEnum } from "./templatetypeenum";



// TemplateResponse
/** 
 * Provides information about a message template that's associated with your Amazon Pinpoint account.
**/
export class TemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

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
  templateType: TemplateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
