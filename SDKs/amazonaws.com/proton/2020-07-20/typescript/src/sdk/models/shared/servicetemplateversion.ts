import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompatibleEnvironmentTemplate } from "./compatibleenvironmenttemplate";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";



// ServiceTemplateVersion
/** 
 * The version of a service template detail data.
**/
export class ServiceTemplateVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=compatibleEnvironmentTemplates", elemType: CompatibleEnvironmentTemplate })
  compatibleEnvironmentTemplates: CompatibleEnvironmentTemplate[];

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=minorVersion" })
  minorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=recommendedMinorVersion" })
  recommendedMinorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: TemplateVersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
