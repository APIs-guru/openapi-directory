import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryGetStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  status?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
