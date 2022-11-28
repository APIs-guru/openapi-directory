import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsMetadataFilter } from "./opsmetadatafilter";



export class ListOpsMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: OpsMetadataFilter })
  filters?: OpsMetadataFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
