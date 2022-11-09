import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoAccountingDomainWhitelistEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=id, form, name=id;" })
  id?: string;

  @Metadata({ data: "json, name=name, form, name=name;" })
  name?: string;
}
