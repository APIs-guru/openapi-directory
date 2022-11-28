import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DelegatedAdministrator } from "./delegatedadministrator";



export class ListDelegatedAdministratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DelegatedAdministrators", elemType: DelegatedAdministrator })
  delegatedAdministrators?: DelegatedAdministrator[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
