import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";



// ServiceTemplateVersionSummary
/** 
 * A summary of the service template version detail data.
**/
export class ServiceTemplateVersionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

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

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: TemplateVersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
