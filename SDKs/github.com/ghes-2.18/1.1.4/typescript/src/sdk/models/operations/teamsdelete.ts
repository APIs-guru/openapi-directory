import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsDeletePathParams;
}


export class TeamsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
