import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScheduledTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cron_expression" })
  cronExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=script_location" })
  scriptLocation?: string;
}
