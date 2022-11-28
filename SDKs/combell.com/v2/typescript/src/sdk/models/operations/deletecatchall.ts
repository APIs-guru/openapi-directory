import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCatchAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" })
  emailAddress: string;
}


export class DeleteCatchAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email_address" })
  emailAddress: string;
}


export class DeleteCatchAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCatchAllPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteCatchAllQueryParams;
}


export class DeleteCatchAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
