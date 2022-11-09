import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOpsMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OpsMetadataArn" })
  opsMetadataArn: string;
}
