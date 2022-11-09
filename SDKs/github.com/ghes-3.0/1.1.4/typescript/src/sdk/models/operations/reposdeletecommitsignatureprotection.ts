import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposDeleteCommitSignatureProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDeleteCommitSignatureProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposDeleteCommitSignatureProtectionPathParams;
}


export class ReposDeleteCommitSignatureProtectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
