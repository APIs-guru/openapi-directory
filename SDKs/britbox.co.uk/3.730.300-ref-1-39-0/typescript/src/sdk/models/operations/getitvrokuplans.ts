import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItvRokuPlansQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetItvRokuPlansRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetItvRokuPlansQueryParams;
}


export class GetItvRokuPlansResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rokuPlans?: shared.RokuPlans;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
