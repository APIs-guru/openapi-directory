import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateOpsMetadataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OpsMetadataArn" })
  opsMetadataArn?: string;
}
