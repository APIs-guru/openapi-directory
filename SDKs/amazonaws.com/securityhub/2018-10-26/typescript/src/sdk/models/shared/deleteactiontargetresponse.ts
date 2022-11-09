import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteActionTargetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionTargetArn" })
  actionTargetArn: string;
}
