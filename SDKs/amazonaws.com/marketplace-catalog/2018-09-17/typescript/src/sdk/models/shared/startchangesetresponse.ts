import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartChangeSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeSetArn" })
  changeSetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ChangeSetId" })
  changeSetId?: string;
}
