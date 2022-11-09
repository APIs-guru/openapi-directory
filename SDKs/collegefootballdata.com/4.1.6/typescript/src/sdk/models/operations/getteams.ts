import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;
}


export class GetTeamsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTeamsQueryParams;
}


export class GetTeamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Team })
  teams?: shared.Team[];
}
