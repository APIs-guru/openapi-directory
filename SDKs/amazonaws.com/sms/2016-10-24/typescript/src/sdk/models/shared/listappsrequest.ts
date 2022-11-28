import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAppsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appIds" })
  appIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
