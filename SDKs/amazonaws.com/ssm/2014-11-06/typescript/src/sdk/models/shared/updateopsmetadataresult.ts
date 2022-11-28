import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOpsMetadataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OpsMetadataArn" })
  opsMetadataArn?: string;
}
