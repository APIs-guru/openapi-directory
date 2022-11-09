import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DelegatedService } from "./delegatedservice";


export class ListDelegatedServicesForAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DelegatedServices", elemType: shared.DelegatedService })
  delegatedServices?: DelegatedService[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
