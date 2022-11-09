import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortArtifactsByEnum } from "./sortartifactsbyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListArtifactsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactType" })
  artifactType?: string;

  @Metadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: SortArtifactsByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @Metadata({ data: "json, name=SourceUri" })
  sourceUri?: string;
}
