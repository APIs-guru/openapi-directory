import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProjectInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProjectName" })
  projectName: string;
}
