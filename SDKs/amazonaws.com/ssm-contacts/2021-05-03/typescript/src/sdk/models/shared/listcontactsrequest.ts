import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactTypeEnum } from "./contacttypeenum";



export class ListContactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasPrefix" })
  aliasPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ContactTypeEnum;
}
