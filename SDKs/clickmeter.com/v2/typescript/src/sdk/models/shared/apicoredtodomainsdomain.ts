import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApiCoreDtoDomainsDomainTypeEnum {
    System = "System"
,    Go = "Go"
,    Dedicated = "Dedicated"
,    Personal = "Personal"
}


export class ApiCoreDtoDomainsDomain extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom404, form, name=custom404;" })
  custom404?: string;

  @Metadata({ data: "json, name=customHomepage, form, name=customHomepage;" })
  customHomepage?: string;

  @Metadata({ data: "json, name=id, form, name=id;" })
  id?: number;

  @Metadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @Metadata({ data: "json, name=type, form, name=type;" })
  type?: ApiCoreDtoDomainsDomainTypeEnum;
}
