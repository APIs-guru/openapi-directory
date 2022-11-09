import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetadataValue } from "./metadatavalue";
import { Tag } from "./tag";


export class CreateOpsMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Metadata", elemType: shared.MetadataValue })
  metadata?: Map<string, MetadataValue>;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
