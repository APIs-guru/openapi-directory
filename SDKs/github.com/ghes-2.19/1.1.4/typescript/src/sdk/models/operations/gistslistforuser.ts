import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GistsListForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GistsListForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: Date;
}


export class GistsListForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GistsListForUserPathParams;

  @Metadata()
  queryParams: GistsListForUserQueryParams;
}


export class GistsListForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.BaseGist })
  baseGists?: shared.BaseGist[];

  @Metadata()
  validationError?: shared.ValidationError;
}
