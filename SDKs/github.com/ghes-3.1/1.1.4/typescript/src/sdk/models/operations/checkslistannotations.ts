import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChecksListAnnotationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=check_run_id" })
  checkRunId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksListAnnotationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ChecksListAnnotationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChecksListAnnotationsPathParams;

  @SpeakeasyMetadata()
  queryParams: ChecksListAnnotationsQueryParams;
}


export class ChecksListAnnotationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.CheckAnnotation })
  checkAnnotations?: shared.CheckAnnotation[];
}
