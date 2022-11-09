import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateReplicationSetOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
