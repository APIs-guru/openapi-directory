import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataValue } from "./metadatavalue";



export class GetOpsMetadataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Metadata", elemType: MetadataValue })
  metadata?: Map<string, MetadataValue>;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
