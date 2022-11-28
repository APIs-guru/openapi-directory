import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortArtifactsByEnum } from "./sortartifactsbyenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListArtifactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactType" })
  artifactType?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: SortArtifactsByEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=SourceUri" })
  sourceUri?: string;
}
