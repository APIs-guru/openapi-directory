import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEePlansQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetEePlansRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEePlansQueryParams;
}


export class GetEePlansResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eePlans?: shared.EePlans;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
