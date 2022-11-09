import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateAccountStateEnum } from "./createaccountstateenum";


export class ListCreateAccountStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=States" })
  states?: CreateAccountStateEnum[];
}
