import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConnectorSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type?: any;
}
