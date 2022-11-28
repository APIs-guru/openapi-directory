import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DbInstanceStatusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  normal?: boolean;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  statusType?: string;
}
