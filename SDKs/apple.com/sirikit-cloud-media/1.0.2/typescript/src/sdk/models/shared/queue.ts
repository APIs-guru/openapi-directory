import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Content } from "./content";
import { PlayMediaControl } from "./playmediacontrol";
import { QueuePlayPointer } from "./queueplaypointer";


export class Queue extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.Content })
  content: Content[];

  @Metadata({ data: "json, name=contentItemsCount" })
  contentItemsCount?: number;

  @Metadata({ data: "json, name=controls", elemType: shared.PlayMediaControl })
  controls?: Map<string, PlayMediaControl>;

  @Metadata({ data: "json, name=identifier" })
  identifier: string;

  @Metadata({ data: "json, name=insertPointer" })
  insertPointer?: any;

  @Metadata({ data: "json, name=nextContentUrl" })
  nextContentUrl?: string;

  @Metadata({ data: "json, name=playPointer" })
  playPointer?: QueuePlayPointer;

  @Metadata({ data: "json, name=prerollSeconds" })
  prerollSeconds?: number;

  @Metadata({ data: "json, name=previousContentUrl" })
  previousContentUrl?: string;

  @Metadata({ data: "json, name=skipsRemaining" })
  skipsRemaining?: number;

  @Metadata({ data: "json, name=version" })
  version: string;
}
