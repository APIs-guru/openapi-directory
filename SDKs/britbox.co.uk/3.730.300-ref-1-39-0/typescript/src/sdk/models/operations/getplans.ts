import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlansQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetPlansRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPlansQueryParams;
}


export class GetPlansResponse extends SpeakeasyBase {
  @Metadata()
  btPlans?: shared.BtPlans;

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
