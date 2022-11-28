import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portalId" })
  portalId: string;

  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn: string;

  @SpeakeasyMetadata({ data: "json, name=projectCreationDate" })
  projectCreationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=projectDescription" })
  projectDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "json, name=projectLastUpdateDate" })
  projectLastUpdateDate: Date;

  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName: string;
}
