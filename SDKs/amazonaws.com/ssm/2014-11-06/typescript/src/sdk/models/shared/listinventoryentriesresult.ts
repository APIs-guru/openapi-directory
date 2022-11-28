import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListInventoryEntriesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaptureTime" })
  captureTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Entries" })
  entries?: Map<string, string>[];

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersion" })
  schemaVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName?: string;
}
