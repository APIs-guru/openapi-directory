import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateOpsMetadataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=OpsMetadataArn" })
  opsMetadataArn?: string;
}
