import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOptedInProgramsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetOptedInProgramsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetOptedInProgramsSecurity;
}


export class GetOptedInProgramsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  programs?: shared.Programs;

  @SpeakeasyMetadata()
  statusCode: number;
}
