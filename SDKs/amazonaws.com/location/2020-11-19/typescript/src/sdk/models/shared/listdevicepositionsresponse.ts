import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListDevicePositionsResponseEntry } from "./listdevicepositionsresponseentry";


export class ListDevicePositionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entries", elemType: shared.ListDevicePositionsResponseEntry })
  entries: ListDevicePositionsResponseEntry[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
