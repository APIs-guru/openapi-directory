import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListDevicePositionsResponseEntry } from "./listdevicepositionsresponseentry";



export class ListDevicePositionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: ListDevicePositionsResponseEntry })
  entries: ListDevicePositionsResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
