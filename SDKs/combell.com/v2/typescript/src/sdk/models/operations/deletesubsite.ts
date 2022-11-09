import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSubsitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=siteName" })
  siteName: string;
}


export class DeleteSubsiteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_name" })
  siteName: string;
}


export class DeleteSubsiteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSubsitePathParams;

  @Metadata()
  queryParams: DeleteSubsiteQueryParams;
}


export class DeleteSubsiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
