import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";


// ServiceTemplateVersionSummary
/** 
 * A summary of the service template version detail data.
**/
export class ServiceTemplateVersionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

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

  @Metadata({ data: "json, name=status" })
  status: TemplateVersionStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
