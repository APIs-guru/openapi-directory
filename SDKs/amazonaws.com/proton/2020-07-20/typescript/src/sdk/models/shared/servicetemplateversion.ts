import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompatibleEnvironmentTemplate } from "./compatibleenvironmenttemplate";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";


// ServiceTemplateVersion
/** 
 * The version of a service template detail data.
**/
export class ServiceTemplateVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=compatibleEnvironmentTemplates", elemType: shared.CompatibleEnvironmentTemplate })
  compatibleEnvironmentTemplates: CompatibleEnvironmentTemplate[];

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt: Date;

  @Metadata({ data: "json, name=majorVersion" })
  majorVersion: string;

  @Metadata({ data: "json, name=minorVersion" })
  minorVersion: string;

  @Metadata({ data: "json, name=recommendedMinorVersion" })
  recommendedMinorVersion?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=status" })
  status: TemplateVersionStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
