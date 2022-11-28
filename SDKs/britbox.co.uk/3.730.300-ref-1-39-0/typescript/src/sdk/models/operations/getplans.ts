import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlansQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetPlansRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPlansQueryParams;
}


export class GetPlansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  btPlans?: shared.BtPlans;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
