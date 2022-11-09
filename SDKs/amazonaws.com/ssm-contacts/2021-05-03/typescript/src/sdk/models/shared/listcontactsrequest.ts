import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactTypeEnum } from "./contacttypeenum";


export class ListContactsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasPrefix" })
  aliasPrefix?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ContactTypeEnum;
}
