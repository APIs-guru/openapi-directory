import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GistsListStarredQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: Date;
}


export class GistsListStarredRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GistsListStarredQueryParams;
}


export class GistsListStarredResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.BaseGist })
  baseGists?: shared.BaseGist[];

  @Metadata()
  basicError?: shared.BasicError;
}
