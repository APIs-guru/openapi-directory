import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostGetReleaseNotesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
