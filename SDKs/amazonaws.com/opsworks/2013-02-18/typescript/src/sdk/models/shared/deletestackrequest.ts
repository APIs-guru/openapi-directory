import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId: string;
}
