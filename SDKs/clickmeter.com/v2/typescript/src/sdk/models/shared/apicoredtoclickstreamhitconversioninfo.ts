import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoClickStreamHitConversionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessTime" })
  accessTime?: string;

  @Metadata({ data: "json, name=comcost" })
  comcost?: number;

  @Metadata({ data: "json, name=cost" })
  cost?: number;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameter" })
  parameter?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
