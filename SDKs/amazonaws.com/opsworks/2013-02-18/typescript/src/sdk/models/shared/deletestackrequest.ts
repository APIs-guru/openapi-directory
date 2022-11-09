import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=StackId" })
  stackId: string;
}
