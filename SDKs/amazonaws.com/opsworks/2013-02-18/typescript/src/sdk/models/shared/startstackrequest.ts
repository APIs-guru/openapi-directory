import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartStackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=StackId" })
  stackId: string;
}
