import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Runbook } from "./runbook";
import { Tag } from "./tag";



export class StartChangeRequestExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeDetails" })
  changeDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=ChangeRequestName" })
  changeRequestName?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentName" })
  documentName: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=Runbooks", elemType: Runbook })
  runbooks: Runbook[];

  @SpeakeasyMetadata({ data: "json, name=ScheduledEndTime" })
  scheduledEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ScheduledTime" })
  scheduledTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
