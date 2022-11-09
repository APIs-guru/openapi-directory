import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LinkedLedgerAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nominal_code" })
  nominalCode?: string;
}
