import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCatchAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" })
  emailAddress: string;
}


export class DeleteCatchAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email_address" })
  emailAddress: string;
}


export class DeleteCatchAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCatchAllPathParams;

  @Metadata()
  queryParams: DeleteCatchAllQueryParams;
}


export class DeleteCatchAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
