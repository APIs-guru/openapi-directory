import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApiCoreDtoDomainsDomainTypeEnum {
    System = "System",
    Go = "Go",
    Dedicated = "Dedicated",
    Personal = "Personal"
}


export class ApiCoreDtoDomainsDomain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom404, form, name=custom404;" })
  custom404?: string;

  @SpeakeasyMetadata({ data: "json, name=customHomepage, form, name=customHomepage;" })
  customHomepage?: string;

  @SpeakeasyMetadata({ data: "json, name=id, form, name=id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type, form, name=type;" })
  type?: ApiCoreDtoDomainsDomainTypeEnum;
}
