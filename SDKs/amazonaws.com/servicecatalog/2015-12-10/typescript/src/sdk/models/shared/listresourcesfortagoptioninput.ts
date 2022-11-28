import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListResourcesForTagOptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=TagOptionId" })
  tagOptionId: string;
}
