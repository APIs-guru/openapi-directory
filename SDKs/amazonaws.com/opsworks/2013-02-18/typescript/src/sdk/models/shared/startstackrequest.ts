import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartStackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId: string;
}
