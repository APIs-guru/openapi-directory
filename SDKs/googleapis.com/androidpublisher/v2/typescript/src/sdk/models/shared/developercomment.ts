import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";



export class DeveloperComment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  lastModified?: Timestamp;

  @SpeakeasyMetadata()
  text?: string;
}
