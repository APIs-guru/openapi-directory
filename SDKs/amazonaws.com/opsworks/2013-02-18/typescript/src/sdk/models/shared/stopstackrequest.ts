import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopStackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId: string;
}
