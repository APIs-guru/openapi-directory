import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteOpsMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OpsMetadataArn" })
  opsMetadataArn: string;
}
