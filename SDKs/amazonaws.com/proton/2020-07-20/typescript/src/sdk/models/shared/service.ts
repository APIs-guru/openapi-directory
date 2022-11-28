import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServicePipeline } from "./servicepipeline";
import { ServiceStatusEnum } from "./servicestatusenum";



// Service
/** 
 * The service detail data.
**/
export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=branchName" })
  branchName?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pipeline" })
  pipeline?: ServicePipeline;

  @SpeakeasyMetadata({ data: "json, name=repositoryConnectionArn" })
  repositoryConnectionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryId" })
  repositoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ServiceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
