import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainersVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containersVersionGetInfo?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
