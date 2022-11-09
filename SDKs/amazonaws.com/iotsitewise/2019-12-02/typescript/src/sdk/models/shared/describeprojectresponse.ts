import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeProjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=portalId" })
  portalId: string;

  @Metadata({ data: "json, name=projectArn" })
  projectArn: string;

  @Metadata({ data: "json, name=projectCreationDate" })
  projectCreationDate: Date;

  @Metadata({ data: "json, name=projectDescription" })
  projectDescription?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId: string;

  @Metadata({ data: "json, name=projectLastUpdateDate" })
  projectLastUpdateDate: Date;

  @Metadata({ data: "json, name=projectName" })
  projectName: string;
}
