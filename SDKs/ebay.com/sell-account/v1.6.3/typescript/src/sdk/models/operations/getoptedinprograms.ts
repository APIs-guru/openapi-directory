import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOptedInProgramsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetOptedInProgramsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetOptedInProgramsSecurity;
}


export class GetOptedInProgramsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  programs?: shared.Programs;

  @Metadata()
  statusCode: number;
}
