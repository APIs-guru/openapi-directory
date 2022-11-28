import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSshKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetSshKeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetSshKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSshKeysPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSshKeysQueryParams;
}


export class GetSshKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.SshKey })
  sshKeys?: shared.SshKey[];

  @SpeakeasyMetadata()
  statusCode: number;
}
