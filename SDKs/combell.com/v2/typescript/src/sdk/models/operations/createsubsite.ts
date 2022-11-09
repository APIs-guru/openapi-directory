import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSubsitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class CreateSubsiteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class CreateSubsiteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSubsitePathParams;

  @Metadata()
  queryParams: CreateSubsiteQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AddSubsiteRequest;
}


export class CreateSubsiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
