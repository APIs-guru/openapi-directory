import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLatestResultFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=schedule_id" })
  scheduleId: string;
}


export class GetLatestResultFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetLatestResultFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLatestResultFilePathParams;

  @Metadata()
  security: GetLatestResultFileSecurity;
}


export class GetLatestResultFileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
