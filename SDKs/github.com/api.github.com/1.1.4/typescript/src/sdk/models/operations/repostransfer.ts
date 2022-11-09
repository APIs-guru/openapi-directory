import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposTransferRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=new_owner" })
  newOwner: string;

  @Metadata({ data: "json, name=team_ids" })
  teamIds?: number[];
}


export class ReposTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposTransferPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposTransferRequestBody;
}


export class ReposTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  repository?: shared.Repository;
}
