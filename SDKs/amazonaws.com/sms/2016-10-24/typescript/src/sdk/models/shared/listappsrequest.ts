import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAppsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appIds" })
  appIds?: string[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
