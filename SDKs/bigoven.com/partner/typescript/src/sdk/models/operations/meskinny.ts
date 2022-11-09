import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MeSkinnyResponse extends SpeakeasyBase {
  @Metadata()
  api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
