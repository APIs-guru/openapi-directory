import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creation_time" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=premium" })
  premium?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subAccounts", elemType: Account })
  subAccounts?: Account[];

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}
