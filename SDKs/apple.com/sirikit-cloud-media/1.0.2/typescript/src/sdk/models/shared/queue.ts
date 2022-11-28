import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Content } from "./content";
import { PlayMediaControl } from "./playmediacontrol";
import { QueuePlayPointer } from "./queueplaypointer";



export class Queue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: Content })
  content: Content[];

  @SpeakeasyMetadata({ data: "json, name=contentItemsCount" })
  contentItemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=controls", elemType: PlayMediaControl })
  controls?: Map<string, PlayMediaControl>;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=insertPointer" })
  insertPointer?: any;

  @SpeakeasyMetadata({ data: "json, name=nextContentUrl" })
  nextContentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=playPointer" })
  playPointer?: QueuePlayPointer;

  @SpeakeasyMetadata({ data: "json, name=prerollSeconds" })
  prerollSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=previousContentUrl" })
  previousContentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=skipsRemaining" })
  skipsRemaining?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
