import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeSkinnyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
