import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateActionTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionTargetArn" })
  actionTargetArn: string;
}
