import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateActionTargetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionTargetArn" })
  actionTargetArn: string;
}
