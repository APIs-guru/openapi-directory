import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DocsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
