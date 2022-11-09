import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Destination } from "./destination";
import { Detail } from "./detail";
import { ItemRouting } from "./itemrouting";
import { Detail } from "./detail";


export class Report extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationCount" })
  destinationCount?: number;

  @Metadata({ data: "json, name=destinations", elemType: shared.Destination })
  destinations?: Destination[];

  @Metadata({ data: "json, name=errorCount" })
  errorCount?: number;

  @Metadata({ data: "json, name=errors", elemType: shared.Detail })
  errors?: Detail[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=reportItemCount" })
  reportItemCount?: number;

  @Metadata({ data: "json, name=routing", elemType: shared.ItemRouting })
  routing?: ItemRouting[];

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: string;

  @Metadata({ data: "json, name=warningCount" })
  warningCount?: number;

  @Metadata({ data: "json, name=warnings", elemType: shared.Detail })
  warnings?: Detail[];
}
