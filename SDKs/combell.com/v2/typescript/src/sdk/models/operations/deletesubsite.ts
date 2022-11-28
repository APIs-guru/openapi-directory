import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSubsitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteName" })
  siteName: string;
}


export class DeleteSubsiteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_name" })
  siteName: string;
}


export class DeleteSubsiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSubsitePathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteSubsiteQueryParams;
}


export class DeleteSubsiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
