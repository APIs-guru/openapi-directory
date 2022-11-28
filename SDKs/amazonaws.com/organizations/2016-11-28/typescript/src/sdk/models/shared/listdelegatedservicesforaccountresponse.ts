import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DelegatedService } from "./delegatedservice";



export class ListDelegatedServicesForAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DelegatedServices", elemType: DelegatedService })
  delegatedServices?: DelegatedService[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
