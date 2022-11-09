import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelChangeSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeSetArn" })
  changeSetArn?: string;

  @Metadata({ data: "json, name=ChangeSetId" })
  changeSetId?: string;
}
