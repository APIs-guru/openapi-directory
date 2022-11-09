import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetProjectsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetProjectsQueryParams;
}


export class GetProjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ProjectEntity })
  projectEntities?: shared.ProjectEntity[];

  @Metadata()
  statusCode: number;
}
