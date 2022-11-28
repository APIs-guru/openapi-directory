import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoAccountingDomainWhitelistEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id, form, name=id;" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;" })
  name?: string;
}
