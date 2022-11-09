import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceStatusEnum } from "./servicestatusenum";


// ServiceSummary
/** 
 * A summary of the service detail data.
**/
export class ServiceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=status" })
  status: ServiceStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
