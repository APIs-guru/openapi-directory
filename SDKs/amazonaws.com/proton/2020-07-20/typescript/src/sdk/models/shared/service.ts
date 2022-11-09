import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServicePipeline } from "./servicepipeline";
import { ServiceStatusEnum } from "./servicestatusenum";


// Service
/** 
 * The service detail data.
**/
export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=branchName" })
  branchName?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pipeline" })
  pipeline?: ServicePipeline;

  @Metadata({ data: "json, name=repositoryConnectionArn" })
  repositoryConnectionArn?: string;

  @Metadata({ data: "json, name=repositoryId" })
  repositoryId?: string;

  @Metadata({ data: "json, name=spec" })
  spec: string;

  @Metadata({ data: "json, name=status" })
  status: ServiceStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
