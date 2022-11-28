import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposTransferRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=new_owner" })
  newOwner: string;

  @SpeakeasyMetadata({ data: "json, name=team_ids" })
  teamIds?: number[];
}


export class ReposTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposTransferPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposTransferRequestBody;
}


export class ReposTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  minimalRepository?: shared.MinimalRepository;
}
