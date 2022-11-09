import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateHeartbeat extends SpeakeasyBase {
  @Metadata({ data: "json, name=application" })
  application?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=result" })
  result?: string;

  @Metadata({ data: "json, name=took" })
  took?: number;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
