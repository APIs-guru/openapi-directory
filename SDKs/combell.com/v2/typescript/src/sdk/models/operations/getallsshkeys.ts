import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllSshKeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetAllSshKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllSshKeysQueryParams;
}


export class GetAllSshKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.SshKeyDetail })
  sshKeyDetails?: shared.SshKeyDetail[];

  @SpeakeasyMetadata()
  statusCode: number;
}
