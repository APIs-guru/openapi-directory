import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAccountStateEnum } from "./createaccountstateenum";



export class ListCreateAccountStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=States" })
  states?: CreateAccountStateEnum[];
}
