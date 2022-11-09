import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoAccountingIpBlacklistEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=id, form, name=id;" })
  id?: string;

  @Metadata({ data: "json, name=ip, form, name=ip;" })
  ip?: string;
}
