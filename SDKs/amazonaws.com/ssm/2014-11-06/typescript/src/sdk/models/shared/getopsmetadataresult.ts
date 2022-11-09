import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetadataValue } from "./metadatavalue";


export class GetOpsMetadataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Metadata", elemType: shared.MetadataValue })
  metadata?: Map<string, MetadataValue>;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
