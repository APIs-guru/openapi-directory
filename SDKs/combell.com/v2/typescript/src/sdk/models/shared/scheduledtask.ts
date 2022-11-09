import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScheduledTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=cron_expression" })
  cronExpression?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=script_location" })
  scriptLocation?: string;
}
