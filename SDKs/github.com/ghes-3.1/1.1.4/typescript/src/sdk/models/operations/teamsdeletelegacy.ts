import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsDeleteLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsDeleteLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsDeleteLegacyPathParams;
}


export class TeamsDeleteLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  validationError?: shared.ValidationError;
}
