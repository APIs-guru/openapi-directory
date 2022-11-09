import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllSshKeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetAllSshKeysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAllSshKeysQueryParams;
}


export class GetAllSshKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata({ elemType: shared.SshKeyDetail })
  sshKeyDetails?: shared.SshKeyDetail[];

  @Metadata()
  statusCode: number;
}
