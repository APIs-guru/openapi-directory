import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ibl?: any;
}
