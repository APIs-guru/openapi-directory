import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eeCreateTokenResponse?: shared.EeCreateTokenResponse;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
