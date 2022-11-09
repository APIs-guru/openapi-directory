import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListInventoryEntriesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaptureTime" })
  captureTime?: string;

  @Metadata({ data: "json, name=Entries" })
  entries?: Map<string, string>[];

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SchemaVersion" })
  schemaVersion?: string;

  @Metadata({ data: "json, name=TypeName" })
  typeName?: string;
}
