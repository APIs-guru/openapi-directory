import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Log extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=environmentName" })
  environmentName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
