import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DelegatedAdministrator } from "./delegatedadministrator";


export class ListDelegatedAdministratorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DelegatedAdministrators", elemType: shared.DelegatedAdministrator })
  delegatedAdministrators?: DelegatedAdministrator[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
