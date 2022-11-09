import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Account } from "./account";


export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=creation_time" })
  creationTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=premium" })
  premium?: boolean;

  @Metadata({ data: "json, name=subAccounts", elemType: shared.Account })
  subAccounts?: Account[];

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}
