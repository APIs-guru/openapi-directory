import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListServicesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
