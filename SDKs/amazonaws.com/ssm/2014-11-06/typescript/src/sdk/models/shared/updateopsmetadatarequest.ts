import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataValue } from "./metadatavalue";



export class UpdateOpsMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeysToDelete" })
  keysToDelete?: string[];

  @SpeakeasyMetadata({ data: "json, name=MetadataToUpdate", elemType: MetadataValue })
  metadataToUpdate?: Map<string, MetadataValue>;

  @SpeakeasyMetadata({ data: "json, name=OpsMetadataArn" })
  opsMetadataArn: string;
}
