import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address?: string;

  @SpeakeasyMetadata()
  port?: number;
}
