import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Runbook } from "./runbook";
import { Tag } from "./tag";


export class StartChangeRequestExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeDetails" })
  changeDetails?: string;

  @Metadata({ data: "json, name=ChangeRequestName" })
  changeRequestName?: string;

  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=DocumentName" })
  documentName: string;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @Metadata({ data: "json, name=Runbooks", elemType: shared.Runbook })
  runbooks: Runbook[];

  @Metadata({ data: "json, name=ScheduledEndTime" })
  scheduledEndTime?: Date;

  @Metadata({ data: "json, name=ScheduledTime" })
  scheduledTime?: Date;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
