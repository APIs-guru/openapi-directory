import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSshKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetSshKeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetSshKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSshKeysPathParams;

  @Metadata()
  queryParams: GetSshKeysQueryParams;
}


export class GetSshKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.SshKey })
  sshKeys?: shared.SshKey[];

  @Metadata()
  statusCode: number;
}
