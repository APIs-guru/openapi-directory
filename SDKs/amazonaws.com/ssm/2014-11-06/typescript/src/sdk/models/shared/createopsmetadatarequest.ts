import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataValue } from "./metadatavalue";
import { Tag } from "./tag";



export class CreateOpsMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Metadata", elemType: MetadataValue })
  metadata?: Map<string, MetadataValue>;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
