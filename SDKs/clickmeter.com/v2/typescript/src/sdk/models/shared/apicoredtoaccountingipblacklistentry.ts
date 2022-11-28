import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoAccountingIpBlacklistEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id, form, name=id;" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ip, form, name=ip;" })
  ip?: string;
}
