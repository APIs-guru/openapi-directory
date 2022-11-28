import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteActionTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionTargetArn" })
  actionTargetArn: string;
}
