import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListResourcesForTagOptionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=TagOptionId" })
  tagOptionId: string;
}
