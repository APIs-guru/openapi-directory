import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposGetClonesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetClonesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per" })
  per?: shared.PerEnum;
}


export class ReposGetClonesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetClonesPathParams;

  @SpeakeasyMetadata()
  queryParams: ReposGetClonesQueryParams;
}


export class ReposGetClonesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  cloneTraffic?: shared.CloneTraffic;
}
