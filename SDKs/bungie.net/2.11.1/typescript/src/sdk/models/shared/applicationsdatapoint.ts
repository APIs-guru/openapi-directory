import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApplicationsDatapoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  count?: number;

  @SpeakeasyMetadata()
  time?: Date;
}
