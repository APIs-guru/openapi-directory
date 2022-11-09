import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetadataValue } from "./metadatavalue";


export class UpdateOpsMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeysToDelete" })
  keysToDelete?: string[];

  @Metadata({ data: "json, name=MetadataToUpdate", elemType: shared.MetadataValue })
  metadataToUpdate?: Map<string, MetadataValue>;

  @Metadata({ data: "json, name=OpsMetadataArn" })
  opsMetadataArn: string;
}
