import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateReplicationSetOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
