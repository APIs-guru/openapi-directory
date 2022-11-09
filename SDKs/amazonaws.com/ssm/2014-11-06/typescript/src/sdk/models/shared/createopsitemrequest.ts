import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsItemNotification } from "./opsitemnotification";
import { OpsItemDataValue } from "./opsitemdatavalue";
import { RelatedOpsItem } from "./relatedopsitem";
import { Tag } from "./tag";


export class CreateOpsItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActualEndTime" })
  actualEndTime?: Date;

  @Metadata({ data: "json, name=ActualStartTime" })
  actualStartTime?: Date;

  @Metadata({ data: "json, name=Category" })
  category?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Notifications", elemType: shared.OpsItemNotification })
  notifications?: OpsItemNotification[];

  @Metadata({ data: "json, name=OperationalData", elemType: shared.OpsItemDataValue })
  operationalData?: Map<string, OpsItemDataValue>;

  @Metadata({ data: "json, name=OpsItemType" })
  opsItemType?: string;

  @Metadata({ data: "json, name=PlannedEndTime" })
  plannedEndTime?: Date;

  @Metadata({ data: "json, name=PlannedStartTime" })
  plannedStartTime?: Date;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=RelatedOpsItems", elemType: shared.RelatedOpsItem })
  relatedOpsItems?: RelatedOpsItem[];

  @Metadata({ data: "json, name=Severity" })
  severity?: string;

  @Metadata({ data: "json, name=Source" })
  source: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Title" })
  title: string;
}
