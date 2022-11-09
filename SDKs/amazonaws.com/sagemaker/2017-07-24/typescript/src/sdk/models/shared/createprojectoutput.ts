import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateProjectOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProjectArn" })
  projectArn: string;

  @Metadata({ data: "json, name=ProjectId" })
  projectId: string;
}
