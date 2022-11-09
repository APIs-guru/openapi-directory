import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCatchAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class CreateCatchAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class CreateCatchAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateCatchAllPathParams;

  @Metadata()
  queryParams: CreateCatchAllQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CreateCatchAllRequest;
}


export class CreateCatchAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
