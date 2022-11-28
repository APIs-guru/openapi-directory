import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListS3ResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=memberAccountId" })
  memberAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
