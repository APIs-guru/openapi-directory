import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoClickStreamHitConversionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTime" })
  accessTime?: string;

  @SpeakeasyMetadata({ data: "json, name=comcost" })
  comcost?: number;

  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
