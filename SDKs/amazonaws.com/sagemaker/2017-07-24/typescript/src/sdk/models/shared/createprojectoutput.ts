import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateProjectOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProjectArn" })
  projectArn: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectId" })
  projectId: string;
}
