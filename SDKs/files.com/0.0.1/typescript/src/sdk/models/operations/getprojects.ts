import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetProjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProjectsQueryParams;
}


export class GetProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ProjectEntity })
  projectEntities?: shared.ProjectEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
