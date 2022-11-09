import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddSshKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class AddSshKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class AddSshKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddSshKeyPathParams;

  @Metadata()
  queryParams: AddSshKeyQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AddSshKeyRequest;
}


export class AddSshKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
