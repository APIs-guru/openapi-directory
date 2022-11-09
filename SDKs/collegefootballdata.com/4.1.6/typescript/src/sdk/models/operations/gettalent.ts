import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTalentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetTalentRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTalentQueryParams;
}


export class GetTalentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TeamTalent })
  teamTalents?: shared.TeamTalent[];
}
