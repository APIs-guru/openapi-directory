import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsMetadataFilter } from "./opsmetadatafilter";


export class ListOpsMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.OpsMetadataFilter })
  filters?: OpsMetadataFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
