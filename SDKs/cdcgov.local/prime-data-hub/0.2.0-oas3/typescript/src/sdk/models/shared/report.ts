import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { Detail } from "./detail";
import { ItemRouting } from "./itemrouting";



export class Report extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationCount" })
  destinationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: Destination })
  destinations?: Destination[];

  @SpeakeasyMetadata({ data: "json, name=errorCount" })
  errorCount?: number;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Detail })
  errors?: Detail[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=reportItemCount" })
  reportItemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=routing", elemType: ItemRouting })
  routing?: ItemRouting[];

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=warningCount" })
  warningCount?: number;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Detail })
  warnings?: Detail[];
}
