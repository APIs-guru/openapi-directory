import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MeGetMeResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoAccountingUser?: shared.ApiCoreDtoAccountingUser;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
