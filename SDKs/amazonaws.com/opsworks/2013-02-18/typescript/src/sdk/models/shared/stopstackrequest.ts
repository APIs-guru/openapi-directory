import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopStackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=StackId" })
  stackId: string;
}
