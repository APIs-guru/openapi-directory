import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointSortKeyEnum } from "./endpointsortkeyenum";
import { OrderKeyEnum } from "./orderkeyenum";
import { EndpointStatusEnum } from "./endpointstatusenum";


export class ListEndpointsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=LastModifiedTimeAfter" })
  lastModifiedTimeAfter?: Date;

  @Metadata({ data: "json, name=LastModifiedTimeBefore" })
  lastModifiedTimeBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: EndpointSortKeyEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: OrderKeyEnum;

  @Metadata({ data: "json, name=StatusEquals" })
  statusEquals?: EndpointStatusEnum;
}
